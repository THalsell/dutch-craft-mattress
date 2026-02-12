"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-sage";
const labelClass = "block text-sm font-medium text-charcoal mb-1";
const sectionClass = "mb-10";
const sectionTitle = "text-xl font-bold text-charcoal mb-4";

function emptyEducation() {
  return { name: "", address: "", from: "", to: "", graduated: "", degree: "" };
}

function emptyReference() {
  return { name: "", relationship: "", company: "", phone: "", address: "" };
}

function emptyEmployment() {
  return {
    company: "", phone: "", address: "", supervisor: "", jobTitle: "",
    startingSalary: "", endingSalary: "", responsibilities: "",
    from: "", to: "", reasonForLeaving: "", mayWeContact: "",
  };
}

export default function FactoryApplicationPage() {
  const [applicant, setApplicant] = useState({
    firstName: "", middleName: "", lastName: "",
    address: "", city: "", state: "", zip: "",
    phone: "", email: "", dateAvailable: "", ssn: "",
    desiredSalary: "", positionAppliedFor: "",
    usCitizen: "", authorizedToWork: "",
    previouslyWorked: "", previouslyWorkedWhen: "",
    felonyConviction: "", felonyExplanation: "",
  });

  const [education, setEducation] = useState({
    highSchool: emptyEducation(),
    college: emptyEducation(),
    other: emptyEducation(),
  });

  const [references, setReferences] = useState([emptyReference(), emptyReference(), emptyReference()]);
  const [employment, setEmployment] = useState([emptyEmployment(), emptyEmployment()]);

  const [military, setMilitary] = useState({
    branch: "", from: "", to: "", rankAtDischarge: "",
    typeOfDischarge: "", explanation: "",
  });

  const [certified, setCertified] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function updateApplicant(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  }

  function updateEducation(level: keyof typeof education, field: string, value: string) {
    setEducation({ ...education, [level]: { ...education[level], [field]: value } });
  }

  function updateReference(i: number, field: string, value: string) {
    const updated = [...references];
    updated[i] = { ...updated[i], [field]: value };
    setReferences(updated);
  }

  function updateEmployment(i: number, field: string, value: string) {
    const updated = [...employment];
    updated[i] = { ...updated[i], [field]: value };
    setEmployment(updated);
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

    let educationHtml = "";
    (["highSchool", "college", "other"] as const).forEach((level) => {
      const ed = education[level];
      const label = level === "highSchool" ? "High School" : level === "college" ? "College" : "Other";
      educationHtml += `<h3 style="font-size:13px;color:#777;text-transform:uppercase;margin:12px 0 4px">${label}</h3>` +
        table(
          row("School Name", ed.name) +
          row("Address", ed.address) +
          row("From / To", `${ed.from} — ${ed.to}`) +
          row("Graduated", ed.graduated) +
          row("Diploma/Degree", ed.degree)
        );
    });

    let refsHtml = "";
    references.forEach((r, i) => {
      refsHtml += `<h3 style="font-size:13px;color:#777;text-transform:uppercase;margin:12px 0 4px">Reference ${i + 1}</h3>` +
        table(
          row("Full Name", r.name) +
          row("Relationship", r.relationship) +
          row("Company", r.company) +
          row("Phone", r.phone) +
          row("Address", r.address)
        );
    });

    let empHtml = "";
    employment.forEach((emp, i) => {
      empHtml += `<h3 style="font-size:13px;color:#777;text-transform:uppercase;margin:12px 0 4px">Employer ${i + 1}</h3>` +
        table(
          row("Company", emp.company) +
          row("Phone", emp.phone) +
          row("Address", emp.address) +
          row("Supervisor", emp.supervisor) +
          row("Job Title", emp.jobTitle) +
          row("Starting Salary", emp.startingSalary) +
          row("Ending Salary", emp.endingSalary) +
          row("Responsibilities", emp.responsibilities) +
          row("From / To", `${emp.from} — ${emp.to}`) +
          row("Reason for Leaving", emp.reasonForLeaving) +
          row("May We Contact", emp.mayWeContact)
        );
    });

    let milHtml = "";
    if (military.branch) {
      milHtml = section("Military Service", table(
        row("Branch", military.branch) +
        row("From / To", `${military.from} — ${military.to}`) +
        row("Rank at Discharge", military.rankAtDischarge) +
        row("Type of Discharge", military.typeOfDischarge) +
        (military.explanation ? row("Explanation", military.explanation) : "")
      ));
    }

    const html = `
      <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;color:#333">
        <div style="background:#4a7c59;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Factory Application</h1>
        </div>
        <div style="padding:24px">
          ${section("Applicant Information", table(
            row("Name", `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`) +
            row("Address", `${applicant.address}, ${applicant.city}, ${applicant.state} ${applicant.zip}`) +
            row("Phone", applicant.phone) +
            row("Email", applicant.email) +
            row("Date Available", applicant.dateAvailable) +
            row("SSN", applicant.ssn) +
            row("Desired Salary", applicant.desiredSalary) +
            row("Position Applied For", applicant.positionAppliedFor) +
            row("US Citizen", applicant.usCitizen) +
            row("Authorized to Work in US", applicant.authorizedToWork) +
            row("Previously Worked Here", applicant.previouslyWorked + (applicant.previouslyWorkedWhen ? ` (${applicant.previouslyWorkedWhen})` : "")) +
            row("Felony Conviction", applicant.felonyConviction + (applicant.felonyExplanation ? ` — ${applicant.felonyExplanation}` : ""))
          ))}
          ${section("Education", educationHtml)}
          ${section("References", refsHtml)}
          ${section("Previous Employment", empHtml)}
          ${milHtml}
        </div>
      </div>`;

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "factory", html }),
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
              Thank you for applying, {applicant.firstName}. Your application has been sent to our HR team and we will be in touch.
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Factory Application</h1>
          <p className="text-white/80 text-lg">
            Fill out the form below to apply. You can also{" "}
            <a href="/careers/factory-application.pdf" target="_blank" className="underline text-white hover:text-white/80">
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

            {/* Applicant Information */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Applicant Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" name="firstName" required value={applicant.firstName} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Middle Name</label>
                  <input type="text" name="middleName" value={applicant.middleName} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" name="lastName" required value={applicant.lastName} onChange={updateApplicant} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className={labelClass}>Street Address *</label>
                  <input type="text" name="address" required value={applicant.address} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City *</label>
                  <input type="text" name="city" required value={applicant.city} onChange={updateApplicant} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>State *</label>
                    <input type="text" name="state" required value={applicant.state} onChange={updateApplicant} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Zip *</label>
                    <input type="text" name="zip" required value={applicant.zip} onChange={updateApplicant} className={inputClass} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="phone" required value={applicant.phone} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" value={applicant.email} onChange={updateApplicant} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Date Available</label>
                  <input type="date" name="dateAvailable" value={applicant.dateAvailable} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Social Security Number</label>
                  <input type="text" name="ssn" value={applicant.ssn} onChange={updateApplicant} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Desired Salary</label>
                  <input type="text" name="desiredSalary" value={applicant.desiredSalary} onChange={updateApplicant} className={inputClass} />
                </div>
              </div>
              <div className="mb-4">
                <label className={labelClass}>Position Applied For</label>
                <input type="text" name="positionAppliedFor" value={applicant.positionAppliedFor} onChange={updateApplicant} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Are you a US citizen?</label>
                  <select name="usCitizen" value={applicant.usCitizen} onChange={updateApplicant} className={inputClass}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Are you authorized to work in the US?</label>
                  <select name="authorizedToWork" value={applicant.authorizedToWork} onChange={updateApplicant} className={inputClass}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Have you previously worked here?</label>
                  <select name="previouslyWorked" value={applicant.previouslyWorked} onChange={updateApplicant} className={inputClass}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {applicant.previouslyWorked === "Yes" && (
                  <div>
                    <label className={labelClass}>If so, when?</label>
                    <input type="text" name="previouslyWorkedWhen" value={applicant.previouslyWorkedWhen} onChange={updateApplicant} className={inputClass} />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Have you ever been convicted of a felony?</label>
                  <select name="felonyConviction" value={applicant.felonyConviction} onChange={updateApplicant} className={inputClass}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {applicant.felonyConviction === "Yes" && (
                  <div>
                    <label className={labelClass}>Please explain</label>
                    <input type="text" name="felonyExplanation" value={applicant.felonyExplanation} onChange={updateApplicant} className={inputClass} />
                  </div>
                )}
              </div>
            </div>

            {/* Education */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Education</h2>
              {(["highSchool", "college", "other"] as const).map((level) => {
                const label = level === "highSchool" ? "High School" : level === "college" ? "College" : "Other";
                return (
                  <div key={level} className="mb-6">
                    <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">{label}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <div>
                        <label className={labelClass}>School Name</label>
                        <input type="text" value={education[level].name} onChange={(e) => updateEducation(level, "name", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Address</label>
                        <input type="text" value={education[level].address} onChange={(e) => updateEducation(level, "address", e.target.value)} className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className={labelClass}>From</label>
                        <input type="text" value={education[level].from} onChange={(e) => updateEducation(level, "from", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>To</label>
                        <input type="text" value={education[level].to} onChange={(e) => updateEducation(level, "to", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Graduated?</label>
                        <select value={education[level].graduated} onChange={(e) => updateEducation(level, "graduated", e.target.value)} className={inputClass}>
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Diploma/Degree</label>
                        <input type="text" value={education[level].degree} onChange={(e) => updateEducation(level, "degree", e.target.value)} className={inputClass} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* References */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>References</h2>
              {references.map((ref, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">Reference {i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" value={ref.name} onChange={(e) => updateReference(i, "name", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Relationship</label>
                      <input type="text" value={ref.relationship} onChange={(e) => updateReference(i, "relationship", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Company</label>
                      <input type="text" value={ref.company} onChange={(e) => updateReference(i, "company", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" value={ref.phone} onChange={(e) => updateReference(i, "phone", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Address</label>
                      <input type="text" value={ref.address} onChange={(e) => updateReference(i, "address", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous Employment */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Previous Employment</h2>
              {employment.map((emp, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">Employer {i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Company</label>
                      <input type="text" value={emp.company} onChange={(e) => updateEmployment(i, "company", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" value={emp.phone} onChange={(e) => updateEmployment(i, "phone", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Address</label>
                      <input type="text" value={emp.address} onChange={(e) => updateEmployment(i, "address", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Supervisor</label>
                      <input type="text" value={emp.supervisor} onChange={(e) => updateEmployment(i, "supervisor", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>Job Title</label>
                      <input type="text" value={emp.jobTitle} onChange={(e) => updateEmployment(i, "jobTitle", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Starting Salary</label>
                      <input type="text" value={emp.startingSalary} onChange={(e) => updateEmployment(i, "startingSalary", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Ending Salary</label>
                      <input type="text" value={emp.endingSalary} onChange={(e) => updateEmployment(i, "endingSalary", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className={labelClass}>Responsibilities</label>
                    <textarea value={emp.responsibilities} onChange={(e) => updateEmployment(i, "responsibilities", e.target.value)} rows={2} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div>
                      <label className={labelClass}>From</label>
                      <input type="text" value={emp.from} onChange={(e) => updateEmployment(i, "from", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>To</label>
                      <input type="text" value={emp.to} onChange={(e) => updateEmployment(i, "to", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>May we contact?</label>
                      <select value={emp.mayWeContact} onChange={(e) => updateEmployment(i, "mayWeContact", e.target.value)} className={inputClass}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Reason for Leaving</label>
                    <input type="text" value={emp.reasonForLeaving} onChange={(e) => updateEmployment(i, "reasonForLeaving", e.target.value)} className={inputClass} />
                  </div>
                </div>
              ))}
            </div>

            {/* Military Service */}
            <div className={sectionClass}>
              <h2 className={sectionTitle}>Military Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Branch</label>
                  <input type="text" value={military.branch} onChange={(e) => setMilitary({ ...military, branch: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>From</label>
                  <input type="text" value={military.from} onChange={(e) => setMilitary({ ...military, from: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>To</label>
                  <input type="text" value={military.to} onChange={(e) => setMilitary({ ...military, to: e.target.value })} className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Rank at Discharge</label>
                  <input type="text" value={military.rankAtDischarge} onChange={(e) => setMilitary({ ...military, rankAtDischarge: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Type of Discharge</label>
                  <input type="text" value={military.typeOfDischarge} onChange={(e) => setMilitary({ ...military, typeOfDischarge: e.target.value })} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>If other than honorable, please explain</label>
                <input type="text" value={military.explanation} onChange={(e) => setMilitary({ ...military, explanation: e.target.value })} className={inputClass} />
              </div>
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
              <a href="/careers/factory-application.pdf" target="_blank" className="text-sage hover:text-sage/80 underline">
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
