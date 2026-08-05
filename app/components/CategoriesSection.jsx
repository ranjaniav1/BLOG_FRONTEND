"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { useThemeContext } from "../context/ThemeContext";

const CategoriesSection = ({ category = [] }) => {
    const { themeData } = useThemeContext();
    return (
        <section className="pt-10 pb-20 sm:pt-24">
            <SectionHeading
                eyebrow="Categories"
                title="Wander by feeling"
                to="/categories"
                linkLabel="All categories"
            />
            <hr />
            <div className="mt-10 flex flex-wrap gap-4">
                {category.map((cat) => (
                    <Link
                        key={cat._id}
                        href={`/categories/${cat.slug}`}
                        style={{
                            borderColor: themeData?.border,
                            color: themeData?.text?.primary,
                            background: themeData?.text?.button,
                        }}
                        className="
    inline-flex items-center
    rounded-full
    border
    px-6 py-3
    text-[15px]
    font-medium
    transition-all duration-300
  "

                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;