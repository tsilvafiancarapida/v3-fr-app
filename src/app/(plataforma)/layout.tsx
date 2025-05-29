import '../globals.css';
import { Header } from './_components/header';
import { Sidebar } from './_components/sidebar';
export default function PlataformaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
