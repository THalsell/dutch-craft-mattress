export const row = (label: string, value: string) =>
  `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0;color:#222">${value || "—"}</td></tr>`;

export const section = (title: string, content: string) =>
  `<div style="margin-bottom:24px"><h2 style="font-size:16px;color:#4a7c59;border-bottom:2px solid #4a7c59;padding-bottom:6px;margin-bottom:12px">${title}</h2>${content}</div>`;

export const table = (rows: string) =>
  `<table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>`;

export const subhead = (text: string) =>
  `<h3 style="font-size:13px;color:#777;text-transform:uppercase;margin:12px 0 4px">${text}</h3>`;

export function wrapEmailHtml(title: string, body: string) {
  return `
    <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;color:#333">
      <div style="background:#4a7c59;padding:24px;text-align:center">
        <h1 style="color:#fff;margin:0;font-size:22px">${title}</h1>
      </div>
      <div style="padding:24px">
        ${body}
      </div>
    </div>`;
}

export function emptyReference() {
  return { name: "", address: "", phone: "" };
}
