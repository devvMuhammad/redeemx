import Section from "@/lib/Section";

export default function Layout({ children }) {
  return (
    <main className="grid mt-8">
      <Section className="grid lg:grid-cols-[15rem_1fr] h-scren ">
        {children}
      </Section>
    </main>
  );
}
