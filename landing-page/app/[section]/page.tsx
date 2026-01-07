import { notFound, redirect } from 'next/navigation';

const SECTION_REDIRECTS: Record<string, string> = {
  'dla-kogo': '/#dla-kogo',
  'jak-wyglada-konsultacja': '/#process',
  cennik: '/#cennik',
  'o-mnie': '/#o-mnie',
  'umow-konsultacje': '/#booking',
};

export default function SectionRedirect({
  params,
}: {
  params: { section: string };
}) {
  const target = SECTION_REDIRECTS[params.section];

  if (!target) {
    notFound();
  }

  redirect(target);
}
