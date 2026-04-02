import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, VolumeX, Pause, Play, Square, ChevronDown, ChevronUp } from "lucide-react";

const STORAGE_KEY = "dc-tts-enabled";

function getMainText(): string {
  const main = document.getElementById("main-content");
  if (!main) return "";
  const clone = main.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("nav, footer, button, input, select, textarea, [aria-hidden='true'], .sr-only, svg").forEach((el) => el.remove());
  const text = clone.innerText
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();
  return text;
}

export function TextToSpeech() {
  const [supported, setSupported] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setSupported("speechSynthesis" in window);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }, []);

  useEffect(() => {
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  const speak = useCallback(() => {
    window.speechSynthesis.cancel();
    const text = getMainText();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = "en-GB";
    utterance.onstart = () => { setSpeaking(true); setPaused(false); };
    utterance.onend = () => { setSpeaking(false); setPaused(false); };
    utterance.onerror = () => { setSpeaking(false); setPaused(false); };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [rate]);

  const togglePause = useCallback(() => {
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  }, [paused]);

  if (!supported) return null;

  return (
    <div
      className="fixed bottom-[72px] right-4 z-40 flex flex-col items-end gap-2"
      role="region"
      aria-label="Text to speech controls"
    >
      {expanded && (
        <div className="bg-white border border-border rounded-2xl shadow-2xl p-4 w-64 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm text-foreground">Listen to this page</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-snug">
            Reads the page content aloud using your device's built-in speech engine.
          </p>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              Reading speed: {rate === 0.75 ? "Slow" : rate === 1 ? "Normal" : rate === 1.25 ? "Fast" : "Faster"}
            </label>
            <div className="flex gap-1.5">
              {([0.75, 1, 1.25, 1.5] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRate(r); if (speaking) { stop(); setTimeout(speak, 100); } }}
                  className={`flex-1 py-1.5 text-xs rounded-lg font-semibold border transition-colors ${
                    rate === r ? "bg-primary text-white border-primary" : "bg-background border-border text-foreground hover:border-primary/40"
                  }`}
                >
                  {r === 0.75 ? "Slow" : r === 1 ? "Normal" : r === 1.25 ? "Fast" : "Faster"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {!speaking ? (
              <button
                onClick={speak}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-xl transition-colors"
                aria-label="Start reading page aloud"
              >
                <Play className="w-4 h-4" />
                Listen
              </button>
            ) : (
              <>
                <button
                  onClick={togglePause}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-xl transition-colors"
                  aria-label={paused ? "Resume reading" : "Pause reading"}
                >
                  {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {paused ? "Resume" : "Pause"}
                </button>
                <button
                  onClick={stop}
                  className="px-3 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-xl transition-colors"
                  aria-label="Stop reading"
                >
                  <Square className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {speaking && (
            <div className="flex items-center gap-2 text-xs text-primary font-medium">
              <span className="flex gap-0.5">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-primary ${paused ? "h-2" : "animate-pulse"}`}
                    style={{ height: paused ? "8px" : `${8 + i * 4}px`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </span>
              {paused ? "Paused" : "Reading…"}
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => {
          if (speaking) { stop(); setExpanded(false); }
          else { setExpanded((e) => !e); }
        }}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg font-semibold text-sm transition-all ${
          speaking
            ? "bg-primary text-white"
            : "bg-white border border-border text-foreground hover:border-primary/40 hover:shadow-xl"
        }`}
        aria-label={speaking ? "Stop reading" : expanded ? "Close text to speech" : "Open text to speech — listen to this page"}
        aria-expanded={expanded}
      >
        {speaking ? (
          <>
            <VolumeX className="w-4 h-4" />
            Stop
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-primary" />
            Listen
            {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </>
        )}
      </button>
    </div>
  );
}
