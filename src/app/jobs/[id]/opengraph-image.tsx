import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Job One - Job Details";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({ params }: { params: { id: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          color: "#ffffff",
          background: "#718096",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Job Details for ID: {params.id}
      </div>
    ),
    size
  );
}
