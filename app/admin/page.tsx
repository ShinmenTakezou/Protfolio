import { AdminClient } from "@/components/AdminClient";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Admin Lab"
};

export default function AdminPage() {
  return (
    <>
      <PageHero
        label="Admin Lab"
        title="Edit drafts from the website."
        body="This page saves drafts in your browser. For permanent deployed content, copy your final drafts into the typed data files."
      />
      <AdminClient />
    </>
  );
}
