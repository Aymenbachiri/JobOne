import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Job One - Sign Up";
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
          fontSize: 36,
          color: "#ffffff",
          background: "#2b6cb0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Join One Jobs Today!
      </div>
    ),
    size
  );
}
