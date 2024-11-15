import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Job One - Find your next opportunity!";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          color: "#ffffff",
          background: "#1a202c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Welcome to One Jobs
      </div>
    ),
    size
  );
}
