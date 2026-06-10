
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LibraryRules = () => {
  return (
    <LibraryLayout title="Rules and Regulations">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Library Rules and Regulations</h1>
        <p className="text-gray-700 mb-4">
          Guidelines and policies for library usage, borrowing procedures, and conduct within the library premises.
        </p>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Library Membership</h2>
          
          <ul className="space-y-3 list-disc list-inside text-gray-700 mb-6">
            <li>Staff and Students are members of the Library.</li>
            <li>The users are required to fill-up the Library Membership form to use the Library facilities.</li>
            <li>The users should inform the Librarian about their change of address and phone numbers to update their records.</li>
            <li>Members of the Library can borrow the books against their Bar-coded Library Card, according to its limitations.</li>
          </ul>
          
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-6">
            <h3 className="text-lg font-medium text-aemet-navy mb-4">Issue of Library Card</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Library Card is not transferable.</li>
              <li>Members shall be responsible of Bar-coded Library Card issued to them.</li>
              <li>New Library Card will be issued on payment of penalty charges.</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="text-lg font-medium text-aemet-navy mb-4">Borrowing System</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Library Books issued on production of Bar-coded Library Card.</li>
              <li>Reference Books and Periodicals are only for reference purpose. However, the back volumes and reference books will be issued on overnight borrowing facility.</li>
              <li>Members are held responsible for the books issued against their account.</li>
              <li>Librarian has the right to recall any issued books before due date.</li>
              <li>Issued Books should be Returned or Renewed on or before the Due Date, which would be mentioned in the Book's Due Date Slip.</li>
              <li>The users should not bring the borrowed books inside the Library unless they want to return them.</li>
              <li>The users should not return the borrowed books on the same day.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Borrowing Facilities</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Sl.No</TableHead>
                  <TableHead>User Category</TableHead>
                  <TableHead>Permitted No. of Books</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Faculty</TableCell>
                  <TableCell>7 Books</TableCell>
                  <TableCell>180 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Research Scholar</TableCell>
                  <TableCell>6 Books</TableCell>
                  <TableCell>15 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>PG Students</TableCell>
                  <TableCell>6 Books</TableCell>
                  <TableCell>15 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>UG Students</TableCell>
                  <TableCell>4 Books</TableCell>
                  <TableCell>15 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>Diploma</TableCell>
                  <TableCell>3 Books</TableCell>
                  <TableCell>15 Days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mt-6 mb-6">
            <h3 className="text-lg font-medium text-aemet-navy mb-4">Renewal System</h3>
            <p className="text-gray-700">
              Member can renew the borrowed book(s) for a maximum of two times subject to no request or no demand.
            </p>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-6">
            <h3 className="text-lg font-medium text-aemet-navy mb-4">Fine System</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>The fine against the issued books for student are levied Re. 1.00 per day and for Faculty Members are levied at Rs.10/- per day respectively.</li>
              <li>Members who have not returned the books even after 30 days from the Due Date will loose the right to borrow the books for the current semester.</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="text-lg font-medium text-aemet-navy mb-4">Loss and Damage</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Members should check the books through the missing pages, chapters, Pictures, index etc., while borrowing the books from the library.</li>
              <li>No books in damaged condition will be accepted from the members.</li>
              <li>Mutilation or spoiled books must be replaced by the borrower.</li>
              <li>Members who have lost the books should replace the latest edition of the same title or else should pay double the cost of the books along with Fine and processing fee of Rs.50/-.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">User Access</h2>
          
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Library follows the OPEN ACCESS SYSTEM. So users can approach the subject wise Bookracks to find out the Books, Periodicals and Projects.</li>
            <li>The users can search the availability of Books through the Intranet Library Online Public Access Catalogue (OPAC) System.</li>
            <li>The users can reserve the books by using Username and Password through the Intranet.</li>
            <li>The user should borrow the reserved book with in 48 hours, if not the reservation automatically cancelled and the reserved document will be send to the racks for further use.</li>
            <li>Members of the Library can check their accounts in the OPAC enabled computers by using their user ID & Password.</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-6">General Instructions</h2>
          
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>No Library user shall deface the Library Books by Underlining, Scribbling and Tampering off the Pages etc.</li>
            <li>Users are required to protect the Library Books against wanton and willful Damage, Mutilation, Theft and other Malpractices.</li>
            <li>Member discontinuing the Course or Job for any reason should surrender the books and the Bar-coded Library card to the Library and collect their NO DUE certificate.</li>
            <li>Library users are requested to OBSERVE COMPLETE SILENCE inside the Library.</li>
            <li>Library users should leave their personal belongings outside the Library for safety point of view.</li>
            <li>Members of the Library are requested to produce their ID when asked by the library staff member.</li>
            <li>Users found violating any of the Library rules then their membership will be cancelled by authorities.</li>
            <li>Library rules are subject to change and will be reviewed by the authorities.</li>
          </ul>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-aemet-navy mb-2">Important Note</h3>
          <p className="text-gray-700">
            Violation of library rules may result in the suspension of library privileges. 
            For any clarification or assistance regarding library rules, please contact the library staff.
          </p>
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryRules;
