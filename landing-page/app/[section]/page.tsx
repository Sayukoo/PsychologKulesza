import { notFound, redirect } from 'next/navigation';

const SECTION_REDIRECTS: Record<string, string> = {
  'dla-kogo': '/#dla-kogo',
  'jak-wyglada-konsultacja': '/#process',
  cennik: '/#cennik',
  'o-mnie': '/#o-mnie',
  'umow-konsultacje': '/#booking',
};

export function generateStaticParams() {
  return Object.keys(SECTION_REDIRECTS).map((section) => ({
    section,
  }));
}

export default async function SectionRedirect({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const target = SECTION_REDIRECTS[section];

  if (!target) {
    notFound();
  }

  redirect(target);
}
