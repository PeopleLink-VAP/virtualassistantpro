
import Navbar from '@/components/Navbar';
import Training from '@/components/Training';
import StudentTestimonials from '@/components/StudentTestimonials';
import Footer from '@/components/Footer';

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />
      <div className="pt-24">
        <Training />
        <StudentTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TrainingPage;
