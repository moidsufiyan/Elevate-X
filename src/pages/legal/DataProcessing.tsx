
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const DataProcessing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-300">
              Last updated: January 1, 2023
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                This Data Processing Agreement ("DPA") forms part of the Terms of Service between Startup Stargaze ("we", "us", "our", "Processor") and the user or entity that has registered for our services ("you", "your", "Controller") (collectively, the "Parties").
              </p>
              
              <p>
                This DPA reflects the Parties' agreement with respect to the processing of Personal Data by us on your behalf in connection with the services provided by Startup Stargaze.
              </p>
              
              <h2>1. Definitions</h2>
              
              <p>
                For the purposes of this DPA, the following terms shall have the following meanings:
              </p>
              
              <ul>
                <li>"Data Protection Laws" means all laws and regulations applicable to the processing of Personal Data under the Agreement, including, without limitation, the GDPR.</li>
                <li>"GDPR" means the General Data Protection Regulation (EU) 2016/679.</li>
                <li>"Personal Data" means any information relating to an identified or identifiable natural person ('data subject').</li>
                <li>"Processing" means any operation or set of operations which is performed on personal data or on sets of personal data.</li>
                <li>"Data Subject" means an identified or identifiable natural person to whom the Personal Data relates.</li>
                <li>"Subprocessor" means any processor engaged by the Processor to assist in fulfilling its obligations with respect to providing the services.</li>
              </ul>
              
              <h2>2. Processing of Personal Data</h2>
              
              <p>
                2.1 Role of the Parties. The Parties acknowledge that with regard to the Processing of Personal Data, you are the Controller and we are the Processor.
              </p>
              
              <p>
                2.2 Instructions. We shall Process Personal Data only on your documented instructions, including with regard to transfers of Personal Data to a third country or an international organization, unless required to do so by law to which we are subject; in such a case, we shall inform you of that legal requirement before processing, unless that law prohibits such information on important grounds of public interest.
              </p>
              
              <p>
                2.3 Details of the Processing. The subject-matter, nature and purpose of the Processing, the types of Personal Data, and the categories of Data Subjects are set forth in Annex A to this DPA.
              </p>
              
              <h2>3. Confidentiality</h2>
              
              <p>
                We shall ensure that persons authorized to Process the Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
              </p>
              
              <h2>4. Security Measures</h2>
              
              <p>
                4.1 Security Measures. Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of Processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, we shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including inter alia as appropriate:
              </p>
              
              <ul>
                <li>the pseudonymization and encryption of Personal Data;</li>
                <li>the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;</li>
                <li>the ability to restore the availability and access to Personal Data in a timely manner in the event of a physical or technical incident;</li>
                <li>a process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.</li>
              </ul>
              
              <p>
                4.2 Risk Assessment. In assessing the appropriate level of security, we shall take account of the risks that are presented by Processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data transmitted, stored or otherwise Processed.
              </p>
              
              <h2>5. Subprocessing</h2>
              
              <p>
                5.1 General Authorization. You hereby authorize us to engage Subprocessors to Process Personal Data. We shall enter into a written agreement with each Subprocessor that imposes obligations on the Subprocessor that are no less protective than the obligations imposed on us under this DPA.
              </p>
              
              <p>
                5.2 Information about Subprocessors. We shall make available to you a current list of Subprocessors for the respective services, including the identities of those Subprocessors and their country of location. We shall update the list to reflect any addition or replacement of Subprocessors at least 30 days prior to the date on which the Subprocessor shall commence processing Personal Data.
              </p>
              
              <h2>6. Data Subject Rights</h2>
              
              <p>
                Taking into account the nature of the Processing, we shall assist you by appropriate technical and organizational measures, insofar as this is possible, for the fulfillment of your obligation to respond to requests for exercising the Data Subject's rights under the Data Protection Laws.
              </p>
              
              <h2>7. Data Protection Impact Assessment</h2>
              
              <p>
                We shall provide reasonable assistance to you with any data protection impact assessments, and prior consultations with Supervising Authorities or other competent data privacy authorities, which you reasonably consider to be required under the GDPR or other Data Protection Laws, in each case solely in relation to Processing of Personal Data by, and taking into account the nature of the Processing and information available to, us.
              </p>

              <h2>Contact Information</h2>
              
              <p>
                For matters related to data processing under this agreement:
              </p>
              
              <p>
                Startup Stargaze<br />
                123 Startup Avenue<br />
                San Francisco, CA 94107<br />
                Email: dpo@startupstargaze.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataProcessing;
