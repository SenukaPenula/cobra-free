import SoftwareCategoryPage from "@/components/software-category-page";
import { softwareList } from "@/lib/software-list";

export async function generateStaticParams() {
    const section = softwareList.find((s) => s.category === "Crack Softwares");
    if (!section) return [];

    const totalPages = Math.ceil(section.items.length / 6);
    return Array.from({ length: totalPages - 1 }, (_, i) => ({
      page: (i + 2).toString(),
    }));
}

export default function CrackSoftwaresPaginatedPage({ params }: { params: { page: string } }) {
  const page = parseInt(params.page, 10);
  return <SoftwareCategoryPage category="Crack Softwares" currentPage={page} />;
}
