import HeroSection from '../containers/HeroSection'
import CompaniesSection from '../containers/CompaniesSection'
import OperationsSection from '../containers/OperationsSection'
import HowItsHelp from '../containers/HowItsHelp'
import FAQSection from '../containers/FAQSection'
import Testimonials from '@/components/testimonials'
export default function Home() {
  return (
    <div className="">
     <HeroSection/>
     <CompaniesSection/>
     <OperationsSection/>
     <HowItsHelp/>
    <FAQSection/>
    <Testimonials/>
    </div>
  );
}
