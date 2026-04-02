import { useState } from "react";

const screens = ["Push Notification", "Recovery Email", "Dashboard Alert", "Recording + Highlights"];

// ─── Theme tokens ──────────────────────────────────────────────────────────

const getTheme = (isDark) => ({
  isDark,
  pageBg:        isDark ? "#070612"                          : "#F4F2FF",
  cardBg:        isDark ? "#161622"                          : "#FFFFFF",
  cardBg2:       isDark ? "#111119"                          : "#F9F8FF",
  surfaceBg:     isDark ? "#1A1A2E"                          : "#EEEAFF",
  navBg:         isDark ? "#0F0D1F"                          : "#FFFFFF",
  border:        isDark ? "#1E1B35"                          : "#E0DCF5",
  border2:       isDark ? "#2D2B45"                          : "#D4CFEF",
  textPrimary:   isDark ? "#E2E8F0"                          : "#1E1B35",
  textSecondary: isDark ? "#94A3B8"                          : "#5B5680",
  textMuted:     isDark ? "#64748B"                          : "#9590B8",
  textWhite:     isDark ? "#FFFFFF"                          : "#1E1B35",
  accentPurple:  "#7C3AED",
  accentLight:   isDark ? "#A78BFA"                          : "#7C3AED",
  accentBg:      isDark ? "rgba(124,58,237,0.12)"            : "rgba(124,58,237,0.07)",
  accentBorder:  isDark ? "rgba(124,58,237,0.35)"            : "rgba(124,58,237,0.25)",
  accentBadgeBg: isDark ? "rgba(124,58,237,0.12)"            : "rgba(124,58,237,0.1)",
  errorBg:       isDark ? "rgba(239,68,68,0.10)"             : "rgba(239,68,68,0.07)",
  errorBorder:   isDark ? "rgba(239,68,68,0.25)"             : "rgba(220,38,38,0.2)",
  errorText:     isDark ? "#FCA5A5"                          : "#DC2626",
  successBg:     isDark ? "rgba(34,197,94,0.08)"             : "rgba(22,163,74,0.07)",
  successBorder: isDark ? "rgba(34,197,94,0.20)"             : "rgba(22,163,74,0.2)",
  successText:   isDark ? "#86EFAC"                          : "#16A34A",
  itemBg:        isDark ? "#0F0D1F"                          : "#F4F2FF",
  shadow:        isDark ? "0 24px 48px rgba(0,0,0,0.45)"    : "0 24px 48px rgba(100,80,200,0.1)",
  phoneShadow:   isDark ? "0 0 0 2px #2D2B45, 0 32px 64px rgba(0,0,0,0.6)" : "0 0 0 2px #D4CFEF, 0 32px 64px rgba(124,58,237,0.12)",
  phoneBg:       isDark ? "#0F0E1A"                          : "#F0EEF9",
  phoneInner:    isDark ? "linear-gradient(160deg,#1A1040 0%,#0D0B1E 60%,#0A1628 100%)" : "linear-gradient(160deg,#EAE6FF 0%,#F4F2FF 60%,#EDF2FF 100%)",
  videoBg:       isDark ? "linear-gradient(160deg,#0D1117 0%,#0D0B1A 50%,#111827 100%)" : "linear-gradient(160deg,#EAE6FF 0%,#F0EEFF 50%,#EEF2FF 100%)",
  specBg:        isDark ? "#161622"                          : "#FFFFFF",
});

// ─── Icons ──────────────────────────────────────────────────────────────────

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12" /></svg>
);
const ArrowIcon = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
  </svg>
);
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
  </svg>
);
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

// ─── Screen 1: Push Notification ───────────────────────────────────────────

function PushNotificationScreen({ t }) {
  const [tapped, setTapped] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: t.accentLight, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
          Trigger: 1 hour after missed live session
        </div>
        <div style={{ color: t.textPrimary, fontSize: 22, fontWeight: 700 }}>Push Notification</div>
        <div style={{ color: t.textSecondary, fontSize: 14, marginTop: 6 }}>Sent to mobile + web browser</div>
      </div>

      {/* Phone frame */}
      <div style={{ width: 340, background: t.phoneBg, borderRadius: 44, padding: "14px 12px", boxShadow: t.phoneShadow, position: "relative" }}>
        {/* Notch */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <div style={{ width: 120, height: 28, background: t.phoneBg, borderRadius: 20, border: `2px solid ${t.border2}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: t.border2 }} />
            <div style={{ width: 50, height: 6, borderRadius: 4, background: t.border2 }} />
          </div>
        </div>

        {/* Lock screen */}
        <div style={{ background: t.phoneInner, borderRadius: 32, padding: "32px 20px 28px", minHeight: 560, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, padding: "0 4px" }}>
            <div style={{ color: t.isDark ? "#E2E8F0" : "#1E1B35", fontSize: 13, fontWeight: 600 }}>9:41</div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {[4,3,2].map(h => <div key={h} style={{ width: 3, height: h * 3, background: t.isDark ? "#E2E8F0" : "#1E1B35", borderRadius: 2 }} />)}
              <div style={{ color: t.isDark ? "#E2E8F0" : "#1E1B35", fontSize: 11, marginLeft: 2 }}>●●●</div>
            </div>
          </div>

          {/* Time */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ color: t.isDark ? "#FFFFFF" : "#1E1B35", fontSize: 68, fontWeight: 200, lineHeight: 1, letterSpacing: -2 }}>9:41</div>
            <div style={{ color: t.isDark ? "#CBD5E1" : "#5B5680", fontSize: 16, marginTop: 8 }}>Thursday, April 2</div>
          </div>

          {/* Notification card */}
          <div onClick={() => setTapped(!tapped)} style={{
            background: tapped ? "rgba(139,92,246,0.2)" : t.isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            borderRadius: 18, padding: "14px 16px",
            border: `1px solid ${tapped ? "rgba(139,92,246,0.4)" : t.isDark ? "rgba(255,255,255,0.1)" : "rgba(200,190,240,0.6)"}`,
            cursor: "pointer", transition: "all 0.2s ease", marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ color: t.isDark ? "#FFFFFF" : "#1E1B35", fontSize: 13, fontWeight: 600 }}>Mindvalley Academy</div>
                  <div style={{ color: t.isDark ? "#94A3B8" : "#9590B8", fontSize: 11 }}>now</div>
                </div>
                <div style={{ color: t.isDark ? "#E2E8F0" : "#2D2B45", fontSize: 13, fontWeight: 600, marginBottom: 3 }}>
                  You missed today's live call 📹
                </div>
                <div style={{ color: t.isDark ? "#CBD5E1" : "#5B5680", fontSize: 12, lineHeight: 1.4 }}>
                  Brendan covered 3 key tactics. Watch the 5-min highlights before they leave your feed.
                </div>
              </div>
            </div>
            {tapped && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(139,92,246,0.3)", display: "flex", gap: 8 }}>
                <div style={{ flex: 1, background: "rgba(139,92,246,0.3)", borderRadius: 10, padding: "8px 12px", textAlign: "center", color: "#C4B5FD", fontSize: 13, fontWeight: 600 }}>Watch Highlights</div>
                <div style={{ flex: 1, background: t.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", borderRadius: 10, padding: "8px 12px", textAlign: "center", color: t.isDark ? "#94A3B8" : "#5B5680", fontSize: 13 }}>Remind me later</div>
              </div>
            )}
          </div>

          {/* Second notification */}
          <div style={{ background: t.isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.65)", backdropFilter: "blur(20px)", borderRadius: 18, padding: "12px 16px", border: `1px solid ${t.isDark ? "rgba(255,255,255,0.07)" : "rgba(200,190,240,0.4)"}`, opacity: 0.7 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: t.isDark ? "#1E293B" : "#EAE6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📅</div>
              <div>
                <div style={{ color: t.textSecondary, fontSize: 12 }}>Calendar • 2h ago</div>
                <div style={{ color: t.isDark ? "#CBD5E1" : "#2D2B45", fontSize: 12 }}>Upcoming: Week 6 Live Session — Tomorrow 7pm</div>
              </div>
            </div>
          </div>

          {!tapped && (
            <div style={{ textAlign: "center", marginTop: 20, color: t.isDark ? "#64748B" : "#9590B8", fontSize: 11 }}>
              tap notification to expand ↑
            </div>
          )}
        </div>
      </div>

      {/* Copy spec */}
      <div style={{ background: t.specBg, borderRadius: 16, padding: 20, maxWidth: 340, width: "100%", border: `1px solid ${t.border2}` }}>
        <div style={{ color: t.accentPurple, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Notification copy spec</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Title", value: "You missed today's live call 📹" },
            { label: "Body",  value: "Brendan covered 3 key tactics. Watch the 5-min highlights before they leave your feed." },
            { label: "CTA 1", value: "Watch Highlights → (deep links to recording)" },
            { label: "CTA 2", value: "Remind me later (re-triggers in 4h)" },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ color: t.textMuted, fontSize: 12, minWidth: 50, paddingTop: 1 }}>{item.label}</div>
              <div style={{ color: t.textSecondary, fontSize: 12, lineHeight: 1.5 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2: Recovery Email ──────────────────────────────────────────────

function RecoveryEmailScreen({ t }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: t.accentLight, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
          Trigger: 1 hour after missed live session
        </div>
        <div style={{ color: t.textPrimary, fontSize: 22, fontWeight: 700 }}>Recovery Email</div>
        <div style={{ color: t.textSecondary, fontSize: 14, marginTop: 6 }}>Personalised, sent once per missed session</div>
      </div>

      <div style={{ width: "100%", maxWidth: 520, background: t.cardBg2, borderRadius: 16, overflow: "hidden", border: `1px solid ${t.border2}`, boxShadow: t.shadow }}>
        {/* Email header */}
        <div style={{ background: t.surfaceBg, padding: "16px 20px", borderBottom: `1px solid ${t.border2}` }}>
          <div style={{ color: t.textMuted, fontSize: 11, marginBottom: 6 }}>FROM: academy@mindvalley.com</div>
          <div style={{ color: t.textPrimary, fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
            You missed today's Social Media Mastery call — here's what happened in 5 min
          </div>
          <div style={{ color: t.textMuted, fontSize: 11 }}>TO: amanda@mindvalley.com · Thursday, April 2 · 8:04 PM</div>
        </div>

        {/* Email body */}
        <div style={{ background: t.isDark ? "#0D0B1A" : "#FAFAFF" }}>
          {/* Hero */}
          <div style={{
            background: t.isDark
              ? "linear-gradient(160deg, #1E1040 0%, #0D0B2E 100%)"
              : "linear-gradient(160deg, #EDE9FF 0%, #F5F3FF 100%)",
            padding: "36px 32px 28px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -30, left: "50%", transform: "translateX(-50%)", width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
            <div style={{ fontSize: 36, marginBottom: 12 }}>📹</div>
            <div style={{ color: t.textWhite, fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
              You missed the call,<br />not the content.
            </div>
            <div style={{ color: t.accentLight, fontSize: 14 }}>Social Media Mastery · Week 5 Q&A with Brendan Kane</div>
          </div>

          <div style={{ padding: "28px 32px" }}>
            <div style={{ color: t.textSecondary, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Hi Amanda, life happens. You missed today's live Q&A — but Brendan covered some of the most-requested topics this week. Here are the 3 moments worth your next 5 minutes.
            </div>

            {/* Miss counter */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.errorBg, border: `1px solid ${t.errorBorder}`, borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ color: t.errorText, fontSize: 12, fontWeight: 500 }}>You've missed 2 of 8 sessions — you're still in the zone.</div>
            </div>

            <div style={{ color: t.accentPurple, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>3 Key Moments</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {[
                { time: "04:12", label: "How to beat the algorithm without going viral", tag: "Most replayed" },
                { time: "18:37", label: "Brendan's exact posting schedule for 2025", tag: "Your question answered" },
                { time: "31:05", label: "Why your hooks aren't working (live audit)", tag: "Top rated" },
              ].map((moment, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: t.cardBg, borderRadius: 12, padding: "14px 16px", border: `1px solid ${t.border}`, cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <PlayIcon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: t.textPrimary, fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{moment.label}</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ color: t.accentPurple, fontSize: 11, fontWeight: 600 }}>{moment.time}</div>
                      <div style={{ width: 3, height: 3, borderRadius: "50%", background: t.border2 }} />
                      <div style={{ color: t.textMuted, fontSize: 11 }}>{moment.tag}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)", borderRadius: 12, padding: "16px 24px", textAlign: "center", cursor: "pointer", marginBottom: 24, boxShadow: "0 8px 24px rgba(124,58,237,0.35)" }}>
              <div style={{ color: "white", fontSize: 15, fontWeight: 700 }}>Watch Full Recording →</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 4 }}>52 min · Available for 7 days</div>
            </div>

            {/* Next session */}
            <div style={{ background: t.cardBg, borderRadius: 12, padding: "14px 18px", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ fontSize: 24 }}>📅</div>
              <div>
                <div style={{ color: t.textPrimary, fontSize: 13, fontWeight: 600 }}>Next live session: Friday, April 5 · 7:00 PM GMT</div>
                <div style={{ color: t.textMuted, fontSize: 12 }}>Add to calendar so you don't miss it →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3: Dashboard Alert ─────────────────────────────────────────────

function DashboardAlertScreen({ t }) {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: t.accentLight, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
          Trigger: Next login after missed session
        </div>
        <div style={{ color: t.textPrimary, fontSize: 22, fontWeight: 700 }}>In-App Dashboard Alert</div>
        <div style={{ color: t.textSecondary, fontSize: 14, marginTop: 6 }}>Appears above the lesson feed on next visit</div>
      </div>

      {/* App shell */}
      <div style={{ width: "100%", maxWidth: 520, background: t.isDark ? "#0A0914" : "#F4F2FF", borderRadius: 20, overflow: "hidden", border: `1px solid ${t.border}`, boxShadow: t.shadow }}>
        {/* Nav */}
        <div style={{ background: t.navBg, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${t.border}` }}>
          <div style={{ color: t.accentPurple, fontWeight: 800, fontSize: 16, letterSpacing: -0.5 }}>Mindvalley</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ color: t.textMuted, fontSize: 13 }}>Progress</div>
            <div style={{ color: t.textMuted, fontSize: 13 }}>Community</div>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "white" }}>A</div>
          </div>
        </div>

        <div style={{ padding: 20 }}>
          {/* Recovery alert */}
          {!dismissed ? (
            <div style={{ background: t.accentBg, border: `1px solid ${t.accentBorder}`, borderRadius: 16, padding: 20, marginBottom: 20, position: "relative" }}>
              <button onClick={() => setDismissed(true)} style={{ position: "absolute", top: 14, right: 14, background: "transparent", border: "none", color: t.textMuted, cursor: "pointer", fontSize: 16, lineHeight: 1 }}>×</button>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ background: t.errorBg, borderRadius: 8, padding: "4px 10px", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ color: t.errorText, fontSize: 11, fontWeight: 600 }}>Missed session</div>
                </div>
                <div style={{ color: t.textMuted, fontSize: 12 }}>Yesterday · Week 5 Q&A</div>
              </div>

              <div style={{ color: t.textWhite, fontSize: 17, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>
                Brendan dropped 3 tactics you haven't seen yet
              </div>
              <div style={{ color: t.textSecondary, fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>
                The recording is available. We pulled the 3 most-watched moments so you can catch up in 5 minutes.
              </div>

              {/* Moment previews */}
              <div style={{ display: "flex", gap: 8, marginBottom: 18, overflowX: "auto" }}>
                {[
                  { time: "4:12", title: "Beat the algorithm" },
                  { time: "18:37", title: "Posting schedule" },
                  { time: "31:05", title: "Hook audit" },
                ].map((m, i) => (
                  <div key={i} style={{ background: t.isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.7)", borderRadius: 10, padding: "10px 14px", border: `1px solid ${t.border}`, flexShrink: 0, minWidth: 120 }}>
                    <div style={{ color: t.accentPurple, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>{m.time}</div>
                    <div style={{ color: t.textSecondary, fontSize: 12 }}>{m.title}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 2, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", borderRadius: 10, padding: "10px 16px", textAlign: "center", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Watch 5-Min Highlights
                </div>
                <div style={{ flex: 1, background: t.isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", borderRadius: 10, padding: "10px 16px", textAlign: "center", color: t.textSecondary, fontSize: 13, cursor: "pointer" }}>
                  Full recording
                </div>
              </div>
            </div>
          ) : (
            <div style={{ background: t.successBg, border: `1px solid ${t.successBorder}`, borderRadius: 16, padding: "14px 20px", marginBottom: 20, display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: t.successBg, display: "flex", alignItems: "center", justifyContent: "center", color: t.successText }}><CheckIcon /></div>
              <div style={{ color: t.successText, fontSize: 13 }}>Reminder set — we'll ping you tonight at 8pm.</div>
            </div>
          )}

          {/* Session progress */}
          <div style={{ background: t.cardBg, borderRadius: 14, padding: 16, marginBottom: 16, border: `1px solid ${t.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ color: t.textPrimary, fontSize: 13, fontWeight: 600 }}>Session Attendance</div>
              <div style={{ color: t.textMuted, fontSize: 12 }}>6 of 8 remaining</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {["watched","watched","missed","missed","upcoming","upcoming","upcoming","upcoming"].map((s, i) => (
                <div key={i} style={{ flex: 1, height: 6, borderRadius: 4, background: s === "watched" ? "#7C3AED" : s === "missed" ? "#EF4444" : t.border }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
              {[["#7C3AED","Attended (2)"],["#EF4444","Missed (2)"],[t.border,"Upcoming (4)"]].map(([color,label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
                  <div style={{ color: t.textMuted, fontSize: 11 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Next lesson */}
          <div style={{ color: t.textMuted, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Continue where you left off</div>
          <div style={{ background: t.cardBg, borderRadius: 14, padding: 16, border: `1px solid ${t.border}`, display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: t.isDark ? "linear-gradient(135deg,#1E3A5F,#0D1F3C)" : "linear-gradient(135deg,#DDE8FF,#C7D7FF)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📲</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: t.textPrimary, fontSize: 14, fontWeight: 600, marginBottom: 3 }}>Lesson 5.3 — Content Calendar Mastery</div>
              <div style={{ color: t.textMuted, fontSize: 12 }}>18 min · Module 5 of 8</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer" }}>
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 4: Recording + Highlights ─────────────────────────────────────

function RecordingScreen({ t }) {
  const [activeTimestamp, setActiveTimestamp] = useState(0);
  const [progress, setProgress] = useState(22);

  const moments = [
    { time: "4:12",  pct: 8,  title: "How to beat the algorithm without going viral", tag: "Most replayed", viewers: "389 views" },
    { time: "18:37", pct: 36, title: "Brendan's exact posting schedule for 2025",     tag: "Your question", viewers: "241 views" },
    { time: "31:05", pct: 60, title: "Why your hooks aren't working — live audit",     tag: "Top rated ⭐",  viewers: "412 views" },
    { time: "44:20", pct: 85, title: "Q&A: best time to post by platform",             tag: "Popular",       viewers: "198 views" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: t.accentLight, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
          Destination: Recording page
        </div>
        <div style={{ color: t.textPrimary, fontSize: 22, fontWeight: 700 }}>Recording + Key Moments</div>
        <div style={{ color: t.textSecondary, fontSize: 14, marginTop: 6 }}>Tapping any moment deep-links to that timestamp</div>
      </div>

      <div style={{ width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Video player */}
        <div style={{ background: "#000", borderRadius: 16, overflow: "hidden", border: `1px solid ${t.border}`, position: "relative" }}>
          <div style={{ aspectRatio: "16/9", background: t.videoBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ opacity: 0.06, fontSize: 120 }}>🎥</div>
            </div>
            <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.85)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "5px 12px", color: "white", fontSize: 12, fontWeight: 600 }}>
              ✨ Highlight: {moments[activeTimestamp].time} — {moments[activeTimestamp].title.slice(0, 30)}…
            </div>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(124,58,237,0.9)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 0 12px rgba(124,58,237,0.15)", color: "white" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
            {/* Scrubber */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
              <div style={{ padding: "0 16px 6px", position: "relative" }}>
                {moments.map((m, i) => (
                  <div key={i} onClick={() => { setActiveTimestamp(i); setProgress(m.pct); }} style={{ position: "absolute", bottom: 14, left: `calc(${m.pct}% + 8px)`, width: 10, height: 10, borderRadius: "50%", cursor: "pointer", background: i === activeTimestamp ? "#A78BFA" : "#7C3AED", border: "2px solid white", zIndex: 2, transform: "translateX(-50%)", boxShadow: i === activeTimestamp ? "0 0 0 4px rgba(167,139,250,0.3)" : "none" }} />
                ))}
                <div style={{ height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 4, position: "relative", cursor: "pointer" }}>
                  <div style={{ height: "100%", width: `${progress}%`, background: "#7C3AED", borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", padding: "8px 16px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ color: "white", fontSize: 13, display: "flex", alignItems: "center", gap: 5 }}>
                  <ClockIcon /> {Math.floor(progress * 52 / 100)}:{String(Math.round((progress * 52 / 100 % 1) * 60)).padStart(2,"0")} / 52:00
                </div>
                <div style={{ background: "rgba(124,58,237,0.8)", borderRadius: 6, padding: "3px 10px", color: "white", fontSize: 11, fontWeight: 600 }}>
                  {moments.length} key moments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session meta */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ color: t.textPrimary, fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Week 5 Q&A with Brendan Kane</div>
            <div style={{ color: t.textMuted, fontSize: 13 }}>Social Media Mastery · Thursday, April 1 · 52 min</div>
          </div>
          <div style={{ background: t.errorBg, border: `1px solid ${t.errorBorder}`, borderRadius: 8, padding: "4px 10px" }}>
            <div style={{ color: t.errorText, fontSize: 11, fontWeight: 600 }}>Missed</div>
          </div>
        </div>

        {/* Key moments */}
        <div>
          <div style={{ color: t.accentPurple, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Key Moments — jump straight in</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {moments.map((m, i) => (
              <div key={i} onClick={() => { setActiveTimestamp(i); setProgress(m.pct); }} style={{ display: "flex", alignItems: "center", gap: 14, background: i === activeTimestamp ? t.accentBg : t.cardBg, borderRadius: 12, padding: "12px 16px", border: `1px solid ${i === activeTimestamp ? t.accentBorder : t.border}`, cursor: "pointer", transition: "all 0.15s ease" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: i === activeTimestamp ? "linear-gradient(135deg, #7C3AED, #4F46E5)" : t.itemBg, display: "flex", alignItems: "center", justifyContent: "center", color: i === activeTimestamp ? "white" : t.textMuted }}>
                  <PlayIcon />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: t.textPrimary, fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{m.title}</div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ color: t.accentPurple, fontSize: 12, fontWeight: 700 }}>{m.time}</div>
                    <div style={{ fontSize: 10, color: t.border2 }}>·</div>
                    <div style={{ color: t.textMuted, fontSize: 11 }}>{m.tag}</div>
                    <div style={{ fontSize: 10, color: t.border2 }}>·</div>
                    <div style={{ color: t.textMuted, fontSize: 11 }}>{m.viewers}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────

export default function RecordingRescuePrototype() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const t = getTheme(isDark);

  const screenComponents = [
    <PushNotificationScreen t={t} />,
    <RecoveryEmailScreen t={t} />,
    <DashboardAlertScreen t={t} />,
    <RecordingScreen t={t} />,
  ];

  return (
    <div style={{ minHeight: "100vh", background: t.pageBg, fontFamily: "'Inter', system-ui, sans-serif", padding: "32px 24px", transition: "background 0.3s ease" }}>
      {/* Header */}
      <div style={{ maxWidth: 560, margin: "0 auto 36px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.accentBadgeBg, border: `1px solid ${t.accentBorder}`, borderRadius: 100, padding: "6px 16px" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.accentPurple }} />
            <div style={{ color: t.accentLight, fontSize: 12, fontWeight: 600 }}>Initiative 2J · P2 Amplifier</div>
          </div>

          {/* Dark / light toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: t.cardBg, border: `1px solid ${t.border2}`,
              borderRadius: 100, padding: "6px 14px", cursor: "pointer",
              color: t.textSecondary, fontSize: 12, fontWeight: 600,
              transition: "all 0.2s ease", boxShadow: t.isDark ? "none" : "0 2px 8px rgba(124,58,237,0.1)"
            }}
          >
            {isDark ? <><SunIcon /> Light</> : <><MoonIcon /> Dark</>}
          </button>
        </div>

        <div style={{ color: t.textWhite, fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginBottom: 10 }}>
          Missed Call Recording Rescue
        </div>
        <div style={{ color: t.textMuted, fontSize: 14, lineHeight: 1.6 }}>
          4 touchpoints that recover students who miss live sessions — from the push notification to the recording page.
        </div>
      </div>

      {/* Screen tabs */}
      <div style={{ maxWidth: 560, margin: "0 auto 32px", display: "flex", background: t.cardBg2, borderRadius: 14, padding: 5, gap: 4, border: `1px solid ${t.border}` }}>
        {screens.map((s, i) => (
          <button key={i} onClick={() => setActiveScreen(i)} style={{
            flex: 1, padding: "9px 8px", borderRadius: 10, border: "none", cursor: "pointer",
            background: i === activeScreen ? "linear-gradient(135deg, #7C3AED, #4F46E5)" : "transparent",
            color: i === activeScreen ? "white" : t.textMuted,
            fontSize: 11, fontWeight: 600, lineHeight: 1.3, transition: "all 0.15s ease",
            boxShadow: i === activeScreen ? "0 4px 12px rgba(124,58,237,0.3)" : "none"
          }}>
            {["01","02","03","04"][i]}<br />{s}
          </button>
        ))}
      </div>

      {/* Active screen */}
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {screenComponents[activeScreen]}
      </div>

      {/* Flow progress bar */}
      <div style={{ maxWidth: 560, margin: "36px auto 0", display: "flex", alignItems: "center" }}>
        {screens.map((s, i) => (
          <div key={i} style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, height: 2, background: i <= activeScreen ? t.accentPurple : t.border, transition: "background 0.3s ease" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, background: i <= activeScreen ? t.accentPurple : t.border, transition: "background 0.3s ease" }} />
            {i === screens.length - 1 && <div style={{ flex: 1, height: 2, background: t.border }} />}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 560, margin: "8px auto 0", display: "flex" }}>
        {screens.map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", color: i === activeScreen ? t.accentLight : t.textMuted, fontSize: 10, fontWeight: 500 }}>{s}</div>
        ))}
      </div>
    </div>
  );
}
