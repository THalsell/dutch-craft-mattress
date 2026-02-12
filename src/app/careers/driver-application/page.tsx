"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage";
const labelClass = "block text-sm font-medium text-charcoal mb-1";
const sectionClass = "mb-10";
const sectionTitle = "text-xl font-bold text-charcoal mb-4";

function emptyAddress() {
  return { address: "", city: "", state: "", zip: "", from: "", to: "" };
}

function emptyEmployer() {
  return { from: "", to: "", name: "", position: "", address: "", reasonForLeaving: "", phone: "" };
}

function emptyReference() {
  return { name: "", address: "", phone: "" };
}

export default function DriverApplicationPage() {
  const [personal, setPersonal] = useState({
    firstName: "", middleName: "", lastName: "",
    phone: "", age: "", dob: "", ssn: "", physicalExamExp: "",
    licenseState: "", licenseNumber: "", licenseType: "",
    endorsements: "", licenseExpiration: "",
  });

  const [addresses, setAddresses] = useState([
    { address: "", city: "", state: "", zip: "", from: "", to: "", current: true },
    emptyAddress(),
    emptyAddress(),
    emptyAddress(),
  ]);

  const [education, setEducation] = useState({
    gradeSchool: "", college: "", postGraduate: "",
  });

  const [employers, setEmployers] = useState([emptyEmployer(), emptyEmployer(), emptyEmployer()]);

  const [driving, setDriving] = useState({
    classOfEquipment: "", dateFrom: "", dateTo: "", totalMiles: "",
    straightTruck: "", tractorSemi: "", tractorTwoTrailers: "",
    other: "", statesOperated: "",
  });

  const [safety, setSafety] = useState({
    specialCourses: "", safeDrivingAwards: "",
  });

  const [accidents, setAccidents] = useState([
    { date: "", nature: "", location: "" },
  ]);

  const [convictions, setConvictions] = useState([
    { date: "", location: "", charge: "", penalty: "" },
  ]);

  const [compliance, setCompliance] = useState({
    licenseDenied: "", licenseDeniedDetails: "",
    licenseSupspended: "", licenseSuspendedDetails: "",
    dotTest: "", dotTestDetails: "",
    felony: "", felonyDetails: "",
  });

  const [references, setReferences] = useState([emptyReference(), emptyReference()]);
  const [certified, setCertified] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function updatePersonal(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }

  function updateAddress(i: number, field: string, value: string) {
    const updated = [...addresses];
    updated[i] = { ...updated[i], [field]: value };
    setAddresses(updated);
  }

  function updateEmployer(i: number, field: string, value: string) {
    const updated = [...employers];
    updated[i] = { ...updated[i], [field]: value };
    setEmployers(updated);
  }

  function updateReference(i: number, field: string, value: string) {
    const updated = [...references];
    updated[i] = { ...updated[i], [field]: value };
    setReferences(updated);
  }

  function updateAccident(i: number, field: string, value: string) {
    const updated = [...accidents];
    updated[i] = { ...updated[i], [field]: value };
    setAccidents(updated);
  }

  function updateConviction(i: number, field: string, value: string) {
    const updated = [...convictions];
    updated[i] = { ...updated[i], [field]: value };
    setConvictions(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const row = (label: string, value: string) =>
      `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0;color:#222">${value || "—"}</td></tr>`;

    const section = (title: string, content: string) =>
      `<div style="margin-bottom:24px"><h2 style="font-size:16px;color:#4a7c59;border-bottom:2px solid #4a7c59;padding-bottom:6px;margin-bottom:12px">${title}</h2>${content}</div>`;

    const table = (rows: string) =>
      `<table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>`;

    const subhead = (text: string) =>
      `<h3 style="font-size:13px;color:#777;text-transform:uppercase;margin:12px 0 4px">${text}</h3>`;

    let addrHtml = "";
    addresses.forEach((addr, i) => {
      const label = i === 0 ? "Current Address" : `Previous Address ${i}`;
      addrHtml += subhead(label) + table(
        row("Address", `${addr.address}, ${addr.city}, ${addr.state} ${addr.zip}`) +
        row("From / To", `${addr.from} — ${addr.to}`)
      );
    });

    let empHtml = "";
    employers.forEach((emp, i) => {
      empHtml += subhead(`Employer ${i + 1}`) + table(
        row("Employer Name", emp.name) +
        row("Position", emp.position) +
        row("Address", emp.address) +
        row("Phone", emp.phone) +
        row("From / To", `${emp.from} — ${emp.to}`) +
        row("Reason for Leaving", emp.reasonForLeaving)
      );
    });

    let accHtml = "";
    accidents.forEach((a, i) => {
      if (a.date || a.nature) {
        accHtml += table(
          row(`#${i + 1} Date`, a.date) +
          row("Nature", a.nature) +
          row("Location", a.location)
        );
      }
    });

    let convHtml = "";
    convictions.forEach((c, i) => {
      if (c.date || c.charge) {
        convHtml += table(
          row(`#${i + 1} Date`, c.date) +
          row("Location", c.location) +
          row("Charge", c.charge) +
          row("Penalty", c.penalty)
        );
      }
    });

    let refsHtml = "";
    references.forEach((r, i) => {
      refsHtml += subhead(`Reference ${i + 1}`) + table(
        row("Name", r.name) +
        row("Address", r.address) +
        row("Phone", r.phone)
      );
    });

    const html = `
      <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;color:#333">
        <div style="background:#4a7c59;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Driver Application</h1>
        </div>
        <div style="padding:24px">
          ${section("Personal Information", table(
            row("Name", `${personal.firstName} ${personal.middleName} ${personal.lastName}`) +
            row("Phone", personal.phone) +
            row("Age", personal.age) +
            row("Date of Birth", personal.dob) +
            row("SSN", personal.ssn) +
            row("Physical Exam Expiration", personal.physicalExamExp) +
            row("License State", personal.licenseState) +
            row("License Number", personal.licenseNumber) +
            row("License Type", personal.licenseType) +
            row("Endorsements", personal.endorsements) +
            row("License Expiration", personal.licenseExpiration)
          ))}
          ${section("Addresses", addrHtml)}
          ${section("Education", table(
            row("Grade School (highest completed)", education.gradeSchool) +
            row("College (highest completed)", education.college) +
            row("Post-Graduate (highest completed)", education.postGraduate)
          ))}
          ${section("Employment History", empHtml)}
          ${section("Driving Experience", table(
            row("Class of Equipment", driving.classOfEquipment) +
            row("From / To", `${driving.dateFrom} — ${driving.dateTo}`) +
            row("Total Miles", driving.totalMiles) +
            row("Straight Truck Miles", driving.straightTruck) +
            row("Tractor Semi-Trailer Miles", driving.tractorSemi) +
            row("Tractor Two-Trailers Miles", driving.tractorTwoTrailers) +
            row("Other", driving.other) +
            row("States Operated In", driving.statesOperated)
          ))}
          ${section("Safety &amp; Training", table(
            row("Special Courses/Training", safety.specialCourses) +
            row("Safe Driving Awards", safety.safeDrivingAwards)
          ))}
          ${accHtml ? section("Accident Record", accHtml) : ""}
          ${convHtml ? section("Traffic Convictions", convHtml) : ""}
          ${section("Compliance Questions", table(
            row("License ever denied or revoked", compliance.licenseDenied + (compliance.licenseDeniedDetails ? ` — ${compliance.licenseDeniedDetails}` : "")) +
            row("License ever suspended", compliance.licenseSupspended + (compliance.licenseSuspendedDetails ? ` — ${compliance.licenseSuspendedDetails}` : "")) +
            row("Failed DOT drug/alcohol test", compliance.dotTest + (compliance.dotTestDetails ? ` — ${compliance.dotTestDetails}` : "")) +
            row("Felony conviction", compliance.felony + (compliance.felonyDetails ? ` — ${compliance.felonyDetails}` : ""))
          ))}
          ${section("Personal References", refsHtml)}
        </div>
      </div>`;

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "driver", html }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-charcoal mb-4">Application Submitted!</h1>
            <p className="text-slate mb-6">
              Thank you for applying, {personal.firstName}. Your application has been sent to our HR team and we will be in touch.
            </p>
            <a href="/careers" className="inline-block bg-sage text-white py-3 px-6 rounded-lg font-medium hover:bg-sage/90 transition-colors">
              Back to Careers
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-sage py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Driver Application</h1>
          <p className="text-white/80 text-lg">
            Fill out the form below to apply. You can also{" "}
            <a href="/careers/driver-application.pdf" target="_blank" className="underline text-white hover:text-white/80">
              download a printable version
            </a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {status === "error" && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-700">Something went wrong. Please try again or email your application to alicia@dutchcraftmattress.com.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Personal Information */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" name="firstName" required value={personal.firstName} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Middle Name</label>
                  <input type="text" name="middleName" value={personal.middleName} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" name="lastName" required value={personal.lastName} onChange={updatePersonal} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="phone" required value={personal.phone} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Age</label>
                  <input type="text" name="age" value={personal.age} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <input type="date" name="dob" value={personal.dob} onChange={updatePersonal} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Social Security Number</label>
                  <input type="text" name="ssn" value={personal.ssn} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Physical Exam Expiration</label>
                  <input type="date" name="physicalExamExp" value={personal.physicalExamExp} onChange={updatePersonal} className={inputClass} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">License Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>State</label>
                  <input type="text" name="licenseState" value={personal.licenseState} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>License Number</label>
                  <input type="text" name="licenseNumber" value={personal.licenseNumber} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Type</label>
                  <input type="text" name="licenseType" value={personal.licenseType} onChange={updatePersonal} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Endorsements</label>
                  <input type="text" name="endorsements" value={personal.endorsements} onChange={updatePersonal} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Expiration Date</label>
                  <input type="date" name="licenseExpiration" value={personal.licenseExpiration} onChange={updatePersonal} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Addresses</h2>
              {addresses.map((addr, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
                    {i === 0 ? "Current Address" : `Previous Address ${i}`}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                    <div className="md:col-span-2">
                      <label className={labelClass}>Street Address{i === 0 ? " *" : ""}</label>
                      <input type="text" required={i === 0} value={addr.address} onChange={(e) => updateAddress(i, "address", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>City</label>
                      <input type="text" value={addr.city} onChange={(e) => updateAddress(i, "city", e.target.value)} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>State</label>
                        <input type="text" value={addr.state} onChange={(e) => updateAddress(i, "state", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Zip</label>
                        <input type="text" value={addr.zip} onChange={(e) => updateAddress(i, "zip", e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>From</label>
                      <input type="text" value={addr.from} onChange={(e) => updateAddress(i, "from", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>To</label>
                      <input type="text" value={addr.to} onChange={(e) => updateAddress(i, "to", e.target.value)} className={inputClass} placeholder={i === 0 ? "Present" : ""} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Education</h2>
              <p className="text-slate text-sm mb-4">Highest grade completed</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Grade School (1-8)</label>
                  <select value={education.gradeSchool} onChange={(e) => setEducation({ ...education, gradeSchool: e.target.value })} className={inputClass}>
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>College (1-4)</label>
                  <select value={education.college} onChange={(e) => setEducation({ ...education, college: e.target.value })} className={inputClass}>
                    <option value="">Select</option>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Post-Graduate (1-4)</label>
                  <select value={education.postGraduate} onChange={(e) => setEducation({ ...education, postGraduate: e.target.value })} className={inputClass}>
                    <option value="">Select</option>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Employment History */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Employment History</h2>
              {employers.map((emp, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">Employer {i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Employer Name</label>
                      <input type="text" value={emp.name} onChange={(e) => updateEmployer(i, "name", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Position Held</label>
                      <input type="text" value={emp.position} onChange={(e) => updateEmployer(i, "position", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Address</label>
                      <input type="text" value={emp.address} onChange={(e) => updateEmployer(i, "address", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" value={emp.phone} onChange={(e) => updateEmployer(i, "phone", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>From</label>
                      <input type="text" value={emp.from} onChange={(e) => updateEmployer(i, "from", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>To</label>
                      <input type="text" value={emp.to} onChange={(e) => updateEmployer(i, "to", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Reason for Leaving</label>
                      <input type="text" value={emp.reasonForLeaving} onChange={(e) => updateEmployer(i, "reasonForLeaving", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Driving Experience */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Driving Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Class of Equipment</label>
                  <input type="text" value={driving.classOfEquipment} onChange={(e) => setDriving({ ...driving, classOfEquipment: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>From</label>
                  <input type="text" value={driving.dateFrom} onChange={(e) => setDriving({ ...driving, dateFrom: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>To</label>
                  <input type="text" value={driving.dateTo} onChange={(e) => setDriving({ ...driving, dateTo: e.target.value })} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Total Miles</label>
                  <input type="text" value={driving.totalMiles} onChange={(e) => setDriving({ ...driving, totalMiles: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Straight Truck</label>
                  <input type="text" value={driving.straightTruck} onChange={(e) => setDriving({ ...driving, straightTruck: e.target.value })} className={inputClass} placeholder="Miles" />
                </div>
                <div>
                  <label className={labelClass}>Tractor Semi-Trailer</label>
                  <input type="text" value={driving.tractorSemi} onChange={(e) => setDriving({ ...driving, tractorSemi: e.target.value })} className={inputClass} placeholder="Miles" />
                </div>
                <div>
                  <label className={labelClass}>Tractor Two-Trailers</label>
                  <input type="text" value={driving.tractorTwoTrailers} onChange={(e) => setDriving({ ...driving, tractorTwoTrailers: e.target.value })} className={inputClass} placeholder="Miles" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Other</label>
                  <input type="text" value={driving.other} onChange={(e) => setDriving({ ...driving, other: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>States Operated In</label>
                  <input type="text" value={driving.statesOperated} onChange={(e) => setDriving({ ...driving, statesOperated: e.target.value })} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Safety & Training */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Safety &amp; Training</h2>
              <div className="mb-4">
                <label className={labelClass}>Special Courses / Training</label>
                <textarea value={safety.specialCourses} onChange={(e) => setSafety({ ...safety, specialCourses: e.target.value })} rows={2} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Safe Driving Awards</label>
                <textarea value={safety.safeDrivingAwards} onChange={(e) => setSafety({ ...safety, safeDrivingAwards: e.target.value })} rows={2} className={inputClass} />
              </div>
            </div>

            {/* Accident Record */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Accident Record</h2>
              {accidents.map((acc, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Date</label>
                    <input type="text" value={acc.date} onChange={(e) => updateAccident(i, "date", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Nature of Accident</label>
                    <input type="text" value={acc.nature} onChange={(e) => updateAccident(i, "nature", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Location</label>
                    <input type="text" value={acc.location} onChange={(e) => updateAccident(i, "location", e.target.value)} className={inputClass} />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setAccidents([...accidents, { date: "", nature: "", location: "" }])}
                className="text-sm text-sage hover:text-sage/80 font-medium"
              >
                + Add another accident record
              </button>
            </div>

            {/* Traffic Convictions */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Traffic Convictions</h2>
              {convictions.map((conv, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Date</label>
                    <input type="text" value={conv.date} onChange={(e) => updateConviction(i, "date", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Location</label>
                    <input type="text" value={conv.location} onChange={(e) => updateConviction(i, "location", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Charge</label>
                    <input type="text" value={conv.charge} onChange={(e) => updateConviction(i, "charge", e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Penalty</label>
                    <input type="text" value={conv.penalty} onChange={(e) => updateConviction(i, "penalty", e.target.value)} className={inputClass} />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setConvictions([...convictions, { date: "", location: "", charge: "", penalty: "" }])}
                className="text-sm text-sage hover:text-sage/80 font-medium"
              >
                + Add another conviction
              </button>
            </div>

            {/* Compliance Questions */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Compliance Questions</h2>
              {[
                { label: "Has your license ever been denied or revoked?", key: "licenseDenied", detailKey: "licenseDeniedDetails" },
                { label: "Has your license ever been suspended?", key: "licenseSupspended", detailKey: "licenseSuspendedDetails" },
                { label: "Have you ever failed a DOT drug or alcohol test?", key: "dotTest", detailKey: "dotTestDetails" },
                { label: "Have you ever been convicted of a felony?", key: "felony", detailKey: "felonyDetails" },
              ].map(({ label, key, detailKey }) => (
                <div key={key} className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className={labelClass}>{label}</label>
                    </div>
                    <div>
                      <select
                        value={compliance[key as keyof typeof compliance]}
                        onChange={(e) => setCompliance({ ...compliance, [key]: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  {compliance[key as keyof typeof compliance] === "Yes" && (
                    <div className="mt-2">
                      <label className={labelClass}>Please provide details</label>
                      <input
                        type="text"
                        value={compliance[detailKey as keyof typeof compliance]}
                        onChange={(e) => setCompliance({ ...compliance, [detailKey]: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Personal References */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Personal References</h2>
              {references.map((ref, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">Reference {i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input type="text" value={ref.name} onChange={(e) => updateReference(i, "name", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address</label>
                      <input type="text" value={ref.address} onChange={(e) => updateReference(i, "address", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" value={ref.phone} onChange={(e) => updateReference(i, "phone", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Disclaimer &amp; Signature</h2>
              <p className="text-slate text-sm mb-4">
                I certify that my answers are true and complete to the best of my knowledge. If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release.
              </p>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={certified}
                  onChange={(e) => setCertified(e.target.checked)}
                  className="mt-1 accent-sage w-4 h-4"
                  required
                />
                <span className="text-sm text-charcoal">I certify the above information is true and complete. *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-sage text-white py-3 px-6 rounded-lg font-medium hover:bg-sage/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-xs text-slate text-center mt-4">
              You can also{" "}
              <a href="/careers/driver-application.pdf" target="_blank" className="text-sage hover:text-sage/80 underline">
                download the printable PDF
              </a>{" "}
              and email it to alicia@dutchcraftmattress.com.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
