import * as React from "react";
import BlogDesc from "../components/Atoms/Descriptions/BlogDesc";
import ComingSoon from "../components/Atoms/NotFound/ComingSoon";

export default function blog() {
  return (
    <section id="blog">
      {/* Blog Title */}
      <BlogDesc />
      <ComingSoon />
    </section>
  );
}
