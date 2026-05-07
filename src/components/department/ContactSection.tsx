
import React from 'react';
import { Building, Phone, Mail, User } from 'lucide-react';

interface ContactSectionProps {
  departmentId?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ departmentId }) => {
  
  // English Department specific contact information
  if (departmentId === 'english') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. C. Vairavan, Associate Professor and Head</h4>
                <p className="text-gray-600">Department of English</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 201 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodeng@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodeng@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Chemistry Department specific contact information
  if (departmentId === 'chemistry') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. T.Rajesh Kumar, M.Sc., Ph.D., PDF (China)</h4>
                <p className="text-gray-600">Assistant Professor & Head</p>
                <p className="text-gray-600">Department of Chemistry</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road, Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 9962952815</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodchem@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodchem@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // AMET Business School specific contact information
  if (departmentId === 'amet-business-school') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Details</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. R. Srinivasan</h4>
                <p className="text-gray-600">Professor & Head</p>
                <p className="text-gray-600">AMET Business School</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">+91 98846 91744</p>
                <p className="text-gray-600">044-27472904/905/155/157 – Extn. 180</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodabs@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodabs@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Mining Engineering specific contact information
  if (departmentId === 'mining-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Mr. A Guru Brahmam, Head i/c</h4>
                <p className="text-gray-600">Department of Mining Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 161 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodmin@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodmin@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Naval Architecture specific contact information
  if (departmentId === 'naval-architecture') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. P. Sivabalan, Professor and Head</h4>
                <p className="text-gray-600">Department of Naval Architecture and Offshore Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Fax: 91 - 44 - 2747 2804 / 2747 2904</p>
                <p className="text-gray-600">Extn: 2125 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodna@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodna@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Nautical Sciences specific contact information
  if (departmentId === 'nautical-sciences') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Capt. P. Rajendran</h4>
                <p className="text-gray-600">Head of the Department</p>
                <p className="text-gray-600">Department of Nautical Science</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 234 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodns@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodns@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Computer Science specific contact information
  if (departmentId === 'computer-science') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. D. Sivakumar, Ph.D</h4>
                <p className="text-gray-600">Professor & Head</p>
                <p className="text-gray-600">Department of Computer Science and Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 96599 54347</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodcs@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodcs@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Information Technology specific contact information
  if (departmentId === 'information-technology') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. N. Duraimutharasan, Ph.D</h4>
                <p className="text-gray-600">Professor & Head</p>
                <p className="text-gray-600">Department of Information Technology</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 202 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodcs@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodcs@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Petroleum Engineering specific contact information
  if (departmentId === 'petroleum-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. T. Nagalakshmi</h4>
                <p className="text-gray-600">Professor & Head</p>
                <p className="text-gray-600">Department of Petroleum Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 192 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:nagalakshmi.t@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  nagalakshmi.t@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mechanical Engineering specific contact information
  if (departmentId === 'mechanical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. S. Bharathi Raja</h4>
                <p className="text-gray-600">Professor & Head</p>
                <p className="text-gray-600">Department of Mechanical Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 190 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:hodmec@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  hodmec@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Electrical Engineering specific contact information
  if (departmentId === 'electrical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. T. Sasilatha</h4>
                <p className="text-gray-600">Professor & Dean</p>
                <p className="text-gray-600">Department of Electronics and Electronics Engineering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2747 2804</p>
                <p className="text-gray-600">Extn: 175 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:deaneeem@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  deaneeem@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Food Processing specific contact information
  if (departmentId === 'food-processing') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-aemet-navy">Dr. John Wyson, Head</h4>
                <p className="text-gray-600">Department of Food Processing Technology</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
                <p className="text-gray-600">135, East Coast Road</p>
                <p className="text-gray-600">Kanathur</p>
                <p className="text-gray-600">Chennai - 603 112</p>
                <p className="text-gray-600">Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
                <p className="text-gray-600">Extn: 240 (Off)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
              <div>
                <a href="mailto:johnwyson@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                  johnwyson@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default contact information for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-4">Contact Information</h3>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <Building className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
            <div>
              <h4 className="font-medium">Academy of Maritime Education and Training (AMET)</h4>
              <p className="text-gray-600">135, East Coast Road, Kanathur</p>
              <p className="text-gray-600">Chennai - 603 112, Tamil Nadu, India</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
            <div>
              <p className="text-gray-600">Phone: 91 - 44 - 2744 4625 / 627 / 628</p>
              <p className="text-gray-600">Extn: 113 (Off)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-aemet-blue mr-3 mt-1" />
            <div>
              <a href="mailto:marineengineering@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                marineengineering@ametuniv.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
