import { useState, useRef } from "react";
import { useGetImageMaps, useCreateImageMap, useDeleteImageMap, useAddHotspot, useDeleteHotspot, useUploadFile } from "@workspace/api-client-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, Plus, Trash2, Image as ImageIcon, MapPin, Mail, MailOpen, MessageSquare, Share2, Camera, CheckCircle2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

interface ContactMsg {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

function InboxPanel() {
  const qc = useQueryClient();
  const { data: messages, isLoading } = useQuery<ContactMsg[]>({
    queryKey: ["contact-messages"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/api/contact/messages`);
      if (!res.ok) throw new Error("Failed to fetch messages");
      return res.json();
    },
    refetchInterval: 30000,
  });

  const markRead = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`${BASE}/api/contact/messages/${id}/read`, { method: "POST" });
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contact-messages"] }),
  });

  const [selected, setSelected] = useState<ContactMsg | null>(null);

  const unreadCount = messages?.filter(m => !m.isRead).length ?? 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[70vh]">
      {/* Message List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
        <div className="bg-primary text-white px-5 py-4 flex items-center justify-between shrink-0">
          <h2 className="font-bold font-serif flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Inbox</h2>
          {unreadCount > 0 && (
            <span className="bg-destructive text-white text-xs font-bold px-2.5 py-1 rounded-full">{unreadCount} unread</span>
          )}
        </div>
        <div className="overflow-y-auto flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center h-full"><Loader2 className="animate-spin text-primary" /></div>
          ) : messages?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
              <Mail className="w-10 h-10 opacity-30" />
              <p className="text-sm">No messages yet</p>
            </div>
          ) : (
            messages?.map(msg => (
              <button
                key={msg.id}
                onClick={() => {
                  setSelected(msg);
                  if (!msg.isRead) markRead.mutate(msg.id);
                }}
                className={`w-full text-left px-5 py-4 border-b border-border hover:bg-muted/50 transition-colors flex items-start gap-3 ${selected?.id === msg.id ? "bg-primary/5 border-l-4 border-l-primary" : ""}`}
              >
                <div className="mt-1 shrink-0">
                  {msg.isRead
                    ? <MailOpen className="w-4 h-4 text-muted-foreground/50" />
                    : <Mail className="w-4 h-4 text-primary" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`flex items-center justify-between gap-2 ${!msg.isRead ? "font-bold" : ""}`}>
                    <span className="truncate text-sm text-foreground">{msg.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {new Date(msg.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground truncate mt-0.5">{msg.subject || "General enquiry"}</div>
                  <div className="text-xs text-muted-foreground/70 truncate mt-0.5">{msg.message}</div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
        {selected ? (
          <>
            <div className="bg-muted px-5 py-4 border-b border-border shrink-0">
              <h3 className="font-bold text-foreground">{selected.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {new Date(selected.createdAt).toLocaleString("en-GB")}
                {selected.subject && ` · ${selected.subject}`}
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <a href={`mailto:${selected.email}`} className="text-primary underline break-all">{selected.email}</a>
                </div>
                {selected.phone && (
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                    <a href={`tel:${selected.phone}`} className="text-primary underline">{selected.phone}</a>
                  </div>
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Message</div>
                <p className="text-foreground leading-relaxed whitespace-pre-wrap text-sm bg-muted/40 rounded-lg p-4 border border-border/50">{selected.message}</p>
              </div>
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject || "Your message to David Chandler")}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-5 py-2.5 rounded-lg transition-colors shadow text-sm"
              >
                <Mail className="w-4 h-4" /> Reply by Email
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-3">
            <MessageSquare className="w-10 h-10 opacity-30" />
            <p className="text-sm">Select a message to read it</p>
          </div>
        )}
      </div>
    </div>
  );
}

const SITE_URL = "https://davidchandler.uk";
const TWITTER_MAX = 280;

function SocialPanel() {
  const { toast } = useToast();
  const upload = useUploadFile();
  const createMap = useCreateImageMap();
  const fileRef = useRef<HTMLInputElement>(null);

  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [shared, setShared] = useState<{ twitter?: boolean; facebook?: boolean }>({});

  const twitterRemaining = TWITTER_MAX - caption.length - (SITE_URL.length + 1);
  const twitterText = caption ? `${caption}\n\n${SITE_URL}` : SITE_URL;
  const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}&quote=${encodeURIComponent(caption)}`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setUploadedUrl(null);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleUploadToGallery = async () => {
    if (!imageFile) return;
    try {
      setUploading(true);
      const res = await upload.mutateAsync({ data: { file: imageFile } });
      const title = caption.slice(0, 60) || imageFile.name.replace(/\.[^.]+$/, "");
      await createMap.mutateAsync({ data: { title, imageUrl: res.url, width: 800, height: 600 } });
      setUploadedUrl(res.url);
      toast({ title: "Photo saved to gallery!", description: "It's now visible on your website." });
    } catch {
      toast({ title: "Upload failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleShare = (platform: "twitter" | "facebook", url: string) => {
    window.open(url, "_blank", "noopener,width=600,height=500");
    setShared((s) => ({ ...s, [platform]: true }));
  };

  const reset = () => {
    setCaption(""); setImageFile(null); setImagePreview(null);
    setUploadedUrl(null); setShared({});
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex items-center gap-3">
          <Share2 className="w-5 h-5 text-primary" />
          <h2 className="font-bold font-serif text-xl text-primary">Post to Social Media</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Compose a post and share it to Twitter/X and Facebook in one place — works directly from your phone.
        </p>

        {/* Photo upload */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Photo (optional)</label>
          {imagePreview ? (
            <div className="relative">
              <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-cover rounded-xl border border-border" />
              <button
                onClick={() => { setImageFile(null); setImagePreview(null); setUploadedUrl(null); if (fileRef.current) fileRef.current.value = ""; }}
                className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-semibold hover:bg-black/80"
              >
                Remove
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-3 w-full p-8 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-colors">
              <Camera className="w-8 h-8 text-primary/50" />
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground">Tap to take a photo or choose one</p>
                <p className="text-xs text-muted-foreground mt-0.5">Opens camera on your phone</p>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>

        {/* Caption */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-foreground">Caption</label>
            <span className={`text-xs font-mono font-bold ${twitterRemaining < 20 ? "text-destructive" : "text-muted-foreground"}`}>
              {twitterRemaining} left for Twitter
            </span>
          </div>
          <textarea
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="What's happening in Mildenhall today?&#10;&#10;The website link is added automatically."
            className="w-full p-3.5 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
          />
        </div>

        {/* Save to gallery */}
        {imageFile && !uploadedUrl && (
          <button
            onClick={handleUploadToGallery}
            disabled={uploading}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-muted border border-border hover:border-primary/40 text-foreground font-semibold text-sm rounded-xl transition-colors disabled:opacity-50"
          >
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
            {uploading ? "Saving to gallery…" : "Also save photo to website gallery"}
          </button>
        )}
        {uploadedUrl && (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Photo saved to website gallery
          </div>
        )}

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => handleShare("twitter", twitterUrl)}
            className="flex items-center justify-center gap-2 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition-colors relative"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Post to X
            {shared.twitter && <CheckCircle2 className="w-3.5 h-3.5 text-green-400 absolute top-1.5 right-1.5" />}
          </button>

          <button
            onClick={() => handleShare("facebook", facebookUrl)}
            className="flex items-center justify-center gap-2 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-sm rounded-xl transition-colors relative"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            Share to Facebook
            {shared.facebook && <CheckCircle2 className="w-3.5 h-3.5 text-green-400 absolute top-1.5 right-1.5" />}
          </button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Tapping either button opens Twitter or Facebook — your caption is pre-filled and your site link is included automatically.
          Just press <strong>Post</strong> in the app that opens. Works on your phone just like using the apps directly.
        </p>

        {(shared.twitter || shared.facebook) && (
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-xs text-green-700 font-semibold">
              {shared.twitter && <span>✓ X shared</span>}
              {shared.facebook && <span>✓ Facebook shared</span>}
            </div>
            <button onClick={reset} className="text-xs text-muted-foreground hover:text-primary underline font-medium">
              New post
            </button>
          </div>
        )}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
        <p className="text-sm font-bold text-amber-800 flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Want fully automatic posting? (No extra taps needed)
        </p>
        <p className="text-xs text-amber-700 leading-relaxed">
          This requires a free Twitter/X Developer account and a Facebook Developer App.
          Once set up, photos would post automatically without opening Twitter or Facebook.
          Ask your web developer to connect the API credentials when you're ready.
        </p>
      </div>
    </div>
  );
}

export default function Admin() {
  const { toast } = useToast();
  const { data: maps, isLoading, refetch } = useGetImageMaps();
  const createMap = useCreateImageMap();
  const deleteMap = useDeleteImageMap();
  const addHotspot = useAddHotspot();
  const removeHotspot = useDeleteHotspot();
  const upload = useUploadFile();

  const [activeTab, setActiveTab] = useState<"inbox" | "maps" | "social">("inbox");
  const [activeMapId, setActiveMapId] = useState<number | null>(null);
  const activeMap = maps?.find(m => m.id === activeMapId);

  const [newTitle, setNewTitle] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [pendingHotspot, setPendingHotspot] = useState<{ x: number, y: number } | null>(null);
  const [hotspotLabel, setHotspotLabel] = useState("");
  const [hotspotLink, setHotspotLink] = useState("https://");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !newTitle) {
      toast({ title: "Error", description: "Provide a title and select an image", variant: "destructive" });
      return;
    }
    try {
      setIsUploading(true);
      const res = await upload.mutateAsync({ data: { file } });
      await createMap.mutateAsync({ data: { title: newTitle, imageUrl: res.url, width: 800, height: 600 } });
      toast({ title: "Success", description: "Image map created!" });
      setNewTitle("");
      refetch();
    } catch {
      toast({ title: "Upload failed", variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteMap = async (id: number) => {
    if (!confirm("Delete this map?")) return;
    try {
      await deleteMap.mutateAsync({ imageMapId: id });
      if (activeMapId === id) setActiveMapId(null);
      refetch();
    } catch {
      toast({ title: "Delete failed", variant: "destructive" });
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!activeMapId) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPendingHotspot({ x, y });
  };

  const handleSaveHotspot = async () => {
    if (!pendingHotspot || !activeMapId || !hotspotLabel) return;
    try {
      await addHotspot.mutateAsync({ imageMapId: activeMapId, data: { label: hotspotLabel, linkUrl: hotspotLink, x: pendingHotspot.x, y: pendingHotspot.y, width: 5, height: 5 } });
      setPendingHotspot(null);
      setHotspotLabel("");
      setHotspotLink("https://");
      refetch();
      toast({ title: "Hotspot added!" });
    } catch {
      toast({ title: "Failed to add hotspot", variant: "destructive" });
    }
  };

  const handleDeleteHotspot = async (hotspotId: number) => {
    if (!activeMapId) return;
    try {
      await removeHotspot.mutateAsync({ imageMapId: activeMapId, hotspotId });
      refetch();
    } catch {
      toast({ title: "Failed to delete hotspot", variant: "destructive" });
    }
  };

  return (
    <div className="w-full bg-background min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-serif text-primary mb-6">Admin Portal</h1>

        {/* Tab Switch */}
        <div className="flex gap-2 mb-8 border-b border-border pb-0">
          <button
            onClick={() => setActiveTab("inbox")}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors -mb-px ${activeTab === "inbox" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <MessageSquare className="w-4 h-4" /> Message Inbox
          </button>
          <button
            onClick={() => setActiveTab("maps")}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors -mb-px ${activeTab === "maps" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <ImageIcon className="w-4 h-4" /> Gallery Manager
          </button>
          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors -mb-px ${activeTab === "social" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <Share2 className="w-4 h-4" /> Social Media
          </button>
        </div>

        {activeTab === "inbox" && <InboxPanel />}
        {activeTab === "social" && <SocialPanel />}

        {activeTab === "maps" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-md">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><Plus className="w-5 h-5"/> New Map</h2>
                <input type="text" placeholder="Map Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-primary" />
                <label className="flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-primary/40 rounded-lg cursor-pointer hover:bg-primary/5 transition-colors text-primary font-bold">
                  {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5" />}
                  {isUploading ? "Uploading..." : "Upload Image"}
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading || !newTitle} />
                </label>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border shadow-md h-[50vh] overflow-y-auto">
                <h2 className="font-bold text-lg mb-4">Existing Maps</h2>
                {isLoading ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> :
                  maps?.map(m => (
                    <div key={m.id} className={`p-3 rounded-lg border mb-3 cursor-pointer transition-colors flex justify-between items-center ${activeMapId === m.id ? 'bg-primary text-white border-primary' : 'bg-muted hover:border-primary/50 text-foreground'}`} onClick={() => setActiveMapId(m.id)}>
                      <span className="font-medium truncate mr-2">{m.title}</span>
                      <button onClick={(e) => { e.stopPropagation(); handleDeleteMap(m.id); }} className="text-destructive/80 hover:text-red-500 p-1 bg-white/10 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Main Area */}
            <div className="lg:col-span-3">
              {activeMap ? (
                <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">{activeMap.title}</h2>
                    <span className="text-sm bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-semibold">Click image to add hotspots</span>
                  </div>
                  <div className="relative inline-block w-full border-2 border-dashed border-gray-300 rounded cursor-crosshair overflow-hidden" onClick={handleImageClick}>
                    <img src={activeMap.imageUrl} alt={activeMap.title} className="w-full h-auto block pointer-events-none" />
                    {activeMap.hotspots.map(h => (
                      <div key={h.id} className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                        <button onClick={(e) => { e.stopPropagation(); handleDeleteHotspot(h.id); }} className="absolute -top-8 bg-destructive text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-auto" title="Delete Hotspot"><Trash2 className="w-3 h-3" /></button>
                        <div className="absolute top-full mt-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none">{h.label}</div>
                      </div>
                    ))}
                    {pendingHotspot && <div className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ left: `${pendingHotspot.x}%`, top: `${pendingHotspot.y}%` }} />}
                  </div>
                  {pendingHotspot && (
                    <div className="mt-8 p-6 bg-muted border border-border rounded-xl">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-destructive"/> Define New Hotspot</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold mb-1">Label / Location Name</label>
                          <input type="text" value={hotspotLabel} onChange={e => setHotspotLabel(e.target.value)} className="w-full p-3 rounded border focus:ring-2 focus:ring-primary" placeholder="e.g. New Hospital Wing" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Link URL</label>
                          <input type="url" value={hotspotLink} onChange={e => setHotspotLink(e.target.value)} className="w-full p-3 rounded border focus:ring-2 focus:ring-primary" placeholder="https://..." />
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <button onClick={() => setPendingHotspot(null)} className="px-5 py-2 rounded text-muted-foreground hover:bg-gray-200 font-semibold">Cancel</button>
                        <button onClick={handleSaveHotspot} disabled={!hotspotLabel || addHotspot.isPending} className="px-5 py-2 bg-primary text-white rounded font-bold hover:bg-primary/90 shadow">
                          {addHotspot.isPending ? "Saving..." : "Save Hotspot"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-muted h-[60vh] rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-lg">
                  Select a map from the sidebar or create a new one.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
