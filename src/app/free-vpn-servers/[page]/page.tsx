import VpnCategoryPage from "@/components/vpn-category-page";
import { softwareList } from "@/lib/software-list";

export async function generateStaticParams() {
    const section = softwareList.find((s) => s.category === "Free VPN Servers");
    if (!section) return [];

    const totalPages = Math.ceil(section.items.length / 6);
    return Array.from({ length: totalPages - 1 }, (_, i) => ({
      page: (i + 2).toString(),
    }));
}

export default function FreeVpnServersPaginatedPage({ params }: { params: { page: string } }) {
  const page = parseInt(params.page, 10);
  return <VpnCategoryPage category="Free VPN Servers" currentPage={page} />;
}
