"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    focus: "",
    timeline: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const emailIsValid = useMemo(() => {
    if (!form.email) {
      return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }, [form.email]);

  const canContinue = useMemo(() => {
    if (step === 0) {
      return Boolean(form.focus && form.timeline && form.budget);
    }

    if (step === 1) {
      return Boolean(form.firstName && form.lastName && emailIsValid);
    }

    return true;
  }, [emailIsValid, form, step]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(null);
    const requiredComplete =
      form.focus &&
      form.timeline &&
      form.budget &&
      form.firstName &&
      form.lastName &&
      emailIsValid;

    if (!requiredComplete) {
      setError("Please complete the required fields before submitting.");
      return;
    }

    setError(null);
    setSubmitting(true);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }

        setSuccess("Thank you for reaching out. A member of our team will be in touch within two business days.");
        setForm({
          focus: "",
          timeline: "",
          budget: "",
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setStep(0);
      })
      .catch(() => {
        setError("Unable to send right now. Please try again shortly.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <form
      className="mt-6 grid gap-6 rounded-2xl border border-border-subtle bg-surface/70 p-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-wrap items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-text-muted">
        {["Advisory Focus", "Contact Details", "Project Notes"].map(
          (label, index) => (
            <button
              key={label}
              type="button"
              className={`rounded-full border px-3 py-1 transition ${
                step === index
                  ? "border-primary text-primary"
                  : "border-border-subtle text-text-muted hover:border-primary/60"
              }`}
              onClick={() => setStep(index)}
            >
              {label}
            </button>
          )
        )}
      </div>

      {step === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
            Advisory Focus
            <select
              className="min-h-[48px] rounded-md border border-border-subtle bg-surface px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              value={form.focus}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, focus: event.target.value }))
              }
              required
            >
              <option value="" disabled>
                Select a focus area
              </option>
              <option className="bg-surface text-text-main" value="Migration Advisory">
                Migration Advisory
              </option>
              <option
                className="bg-surface text-text-main"
                value="Business & Deal Advisory"
              >
                Business & Deal Advisory
              </option>
              <option
                className="bg-surface text-text-main"
                 value="Private Office Coordination"
              >
                 Private Office Coordination
              </option>
              <option
                className="bg-surface text-text-main"
                value="Corporate Structuring"
              >
                Corporate Structuring
              </option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
            Timeline
            <select
              className="min-h-[48px] rounded-md border border-border-subtle bg-surface px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              value={form.timeline}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, timeline: event.target.value }))
              }
              required
            >
              <option value="" disabled>
                Select timeline
              </option>
              <option className="bg-surface text-text-main" value="Immediate (0-3 months)">
                Immediate (0-3 months)
              </option>
              <option className="bg-surface text-text-main" value="Short term (3-6 months)">
                Short term (3-6 months)
              </option>
              <option className="bg-surface text-text-main" value="Mid term (6-12 months)">
                Mid term (6-12 months)
              </option>
              <option className="bg-surface text-text-main" value="Long term (12+ months)">
                Long term (12+ months)
              </option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted md:col-span-2">
            Estimated Budget Range
            <select
              className="min-h-[48px] rounded-md border border-border-subtle bg-surface px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              value={form.budget}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, budget: event.target.value }))
              }
              required
            >
              <option value="" disabled>
                Select budget range
              </option>
              <option className="bg-surface text-text-main" value="Below $100K">
                Below $100K
              </option>
              <option className="bg-surface text-text-main" value="$100K - $250K">
                $100K - $250K
              </option>
              <option className="bg-surface text-text-main" value="$250K - $500K">
                $250K - $500K
              </option>
              <option className="bg-surface text-text-main" value="$500K - $1M">
                $500K - $1M
              </option>
              <option className="bg-surface text-text-main" value="$1M+">
                $1M+
              </option>
            </select>
          </label>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
            First Name
            <input
              className="min-h-[48px] rounded-md border border-border-subtle bg-transparent px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              placeholder="First name"
              value={form.firstName}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, firstName: event.target.value }))
              }
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
            Last Name
            <input
              className="min-h-[48px] rounded-md border border-border-subtle bg-transparent px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              placeholder="Last name"
              value={form.lastName}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, lastName: event.target.value }))
              }
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted md:col-span-2">
            Email Address
            <input
              className="min-h-[48px] rounded-md border border-border-subtle bg-transparent px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
              placeholder="name@company.com"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              aria-invalid={Boolean(form.email) && !emailIsValid}
              required
            />
            {!emailIsValid && form.email ? (
              <span className="text-xs text-primary">
                Enter a valid email address.
              </span>
            ) : null}
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
          Project Notes
          <textarea
            className="min-h-[160px] rounded-md border border-border-subtle bg-transparent px-4 py-3 text-sm text-text-main outline-none focus:border-primary normal-case tracking-normal"
            placeholder="Tell us about your goals, preferred jurisdictions, and timelines."
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
          />
        </label>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        {step > 0 ? (
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setStep((prev) => Math.max(0, prev - 1))}
          >
            Back
          </button>
        ) : null}
        {step < 2 ? (
          <button
            type="button"
            className="btn-primary"
            onClick={() => setStep((prev) => Math.min(2, prev + 1))}
            disabled={!canContinue}
          >
            Continue
          </button>
        ) : (
          <button type="submit" className="btn-primary" disabled={submitting}>
            Submit Inquiry
          </button>
        )}
        {!canContinue && step < 2 ? (
          <span className="text-xs text-text-muted">
            Complete the fields above to continue.
          </span>
        ) : null}
        {error ? <span className="text-xs text-primary">{error}</span> : null}
        {success ? (
          <span className="text-xs text-emerald-300">{success}</span>
        ) : null}
      </div>
    </form>
  );
}
