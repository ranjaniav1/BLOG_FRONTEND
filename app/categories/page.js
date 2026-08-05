'use client'
import Link from "next/link";
import { getCategory } from "../service/home";
import { useEffect, useState } from "react";
import Text from "../components/Text";
import CategoryCard from "../components/CategoryCard";





export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategory();
                console.log(data)
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Text type="heroLabel">Categories</Text>

            <Text type="sectionTitle"
                mt={2}>Choose where to begin</Text>
            <Text type="bodyLarge"
                mt={1} >
                Ten small doorways. Follow whichever one matches the day you are having.
            </Text>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((c) => (


                    <CategoryCard slug={c.slug} totalArticles={0} name={c.name} description={c.description} key={c.slug} />

                ))}
            </div>
        </div>
    );
}
