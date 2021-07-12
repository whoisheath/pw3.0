import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      height={800}
      width={1200}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/food/${slug}`} href="/food/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}