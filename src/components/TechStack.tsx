export default function TechStack() {
  const techs = [
    "VUE.JS",
    "REACT",
    "TAILWIND CSS",
    "NODE.JS",
    "EXPRESS.JS",
    "MYSQL",
    "DOCKER",
    "NGINX",
  ];

  return (
    <section className="py-16 overflow-hidden bg-surface-container-lowest border-y border-border-muted">
      <div className="flex tech-stack-scroll items-center gap-24">
        {/* Double rendering list for seamless infinite loop scroll */}
        <div className="flex items-center gap-24">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="font-label-mono text-2xl opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-24">
          {techs.map((tech, idx) => (
            <span
              key={`dup-${idx}`}
              className="font-label-mono text-2xl opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
