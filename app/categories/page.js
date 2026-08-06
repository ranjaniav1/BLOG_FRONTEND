'use client'
import Link from "next/link";
import { getCategory } from "../service/home";
import { useEffect, useState } from "react";
import Text from "../components/shared/Text";
import CategoryCard from "../components/shared/CategoryCard";
import { CategoriesSkeleton } from "../components/features/Skeleton";





export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategory();
                console.log(data)
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    if (loading) {
        return <CategoriesSkeleton />;
    }
    return (
        <>
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
        </>
    );
}
