import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "../../../components/MDXComponents";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const getMdxData = async (slug: string) => {
    if (!slug) return;
    const filePath = path.join(
        process.cwd(),
        "src/mdx-contents",
        `${slug}.mdx`
    );
    const content = await fs.readFile(filePath, "utf-8");
    const data = await compileMDX({
        source: content,
        options: {
            parseFrontmatter: true,
        },
        components: MDXComponents,
    });

    return data;
};

export const generateMetadata = async ({
    params,
}: {
    params: { slug: string };
}) => {
    try {
        const { slug } = await params;
        const { frontmatter } = await getMdxData(slug);
        return {
            title: frontmatter.title,
            description: frontmatter.description,
        };
    } catch (error) {
        console.error("Error loading metadata:", error);
        return {
            title: "Error",
            description: "Something went wrong please try again.",
        };
    }
};

const page = async ({ params }: { params: { slug: string } }) => {
    try {
        const { slug } = await params;
        const { content } = await getMdxData(slug);
        return (
            <div className="flex justify-center items-center mb-[260px] mt-[80px]">
                <div
                    className={`${figtree.className} text-[#191A1A] md:w-[991px] w-full p-4`}
                >
                    {content}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error loading page content:", error);
        return (
            <div className="flex justify-center items-center mb-[260px] mt-[80px]">
                <div className="w-full md:w-[991px] p-4">
                    <h1 className="text-red-500">Error loading content</h1>
                    <p>
                        There was an issue loading the page. Please try again
                        later.
                    </p>
                </div>
            </div>
        );
    }
};
export default page;
