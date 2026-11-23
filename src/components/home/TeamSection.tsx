import { UserRound } from "lucide-react";
import { doctors } from "@/data/doctors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";

/** Renders nothing until real doctor details are added in src/data/doctors.ts. */
export function TeamSection() {
  if (doctors.length === 0) return null;

  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="section-space bg-surface">
      <div className="container-page">
        <div id="doctors-heading">
          <SectionHeading
            title="Meet Our Dentist"
            description="The people who will look after you, from your first conversation to your follow-up."
          />
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <li key={doctor.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary-soft">
                {doctor.photo ? (
                  <SmartImage image={doctor.photo} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
                ) : (
                  <div className="flex h-full items-center justify-center text-primary/50">
                    <UserRound className="size-20" strokeWidth={1.2} aria-hidden="true" />
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-xl text-ink">{doctor.name}</h3>
              <p className="text-primary-dark">{doctor.designation}</p>
              {doctor.qualifications && doctor.qualifications.length > 0 ? (
                <p className="mt-1 text-sm text-muted">{doctor.qualifications.join(", ")}</p>
              ) : null}
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{doctor.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
