import AdmissionProcess from "@/src/components/admission-process";
import CtaBanner from "@/src/components/cta-banner";
import Faq from "@/src/components/faq";
import Hero from "@/src/components/hero-section";
import ProgramGuide from "@/src/components/program-guide";
import ProgramsTable from "@/src/components/program-table";
import Testimonials from "@/src/components/testimonial-section";
import WhyIgnou from "@/src/components/why-ignou";

export default function Home(){
  return (
    <>
      <Hero />
      <WhyIgnou />
      <ProgramGuide />
      <ProgramsTable />
      <AdmissionProcess />
      <Testimonials />
      <CtaBanner />
      <Faq />
    </>

  )
}