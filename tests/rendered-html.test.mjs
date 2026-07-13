import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the finished English ARVision homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>ARVision — From 3D model to web and AR<\/title>/i);
  assert.match(html, /One clear path from/);
  assert.match(html, /Bring the model/);
  assert.match(html, /Three steps\. One continuous workspace\./);
  assert.match(html, /home-upload-3d\.png/);
  assert.match(html, /hero-3d-maker-world\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("starter preview assets are removed", async () => {
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
