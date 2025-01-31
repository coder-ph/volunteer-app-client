import React from "react";
import "boxicons";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafc] text-[#131414] py-12 mt-16 pl-30 font-serif">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Be a Volunteer</h2>
            <ul className="space-y-2">
              <li>Individual</li>
              <li>Corporate</li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Charity</h2>
            <ul className="space-y-2">
              <li>About</li>
              <li>Team</li>
              <li>Donate</li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Projects</h2>
            <ul className="space-y-2">
              <li>Wrap up Events</li>
              <li>Be the Change</li>
              <li>BrightenUp</li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 flex justify-left gap-6 focus:">
   <box-icon
  name="facebook-circle"
  type="logo"
  color="rgba(5,21,247,0.95)"
  className="text-3xl hover:text-blue-600 focus:text-blue-600 focus:scale-110 focus:translate-y-[-2px] transition-all"
/>
<box-icon
  name="instagram-alt"
  type="logo"
  color="rgba(247,5,9,0.95)"
  className="text-3xl hover:text-pink-600 focus:text-pink-600 focus:scale-110 focus:translate-y-[-2px] transition-all"
/>
<box-icon
  name="twitter"
  type="logo"
  color="rgba(5,85,247,0.95)"
  className="text-3xl hover:text-blue-400 focus:text-blue-400 focus:scale-110 focus:translate-y-[-2px] transition-all"
/>
        </div>

        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 Phyl. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
