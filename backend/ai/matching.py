from embedding import embed_text
from vector_similarity import cosine_similarity


def compare(a: str, b: str):
    score = cosine_similarity(embed_text(a), embed_text(b))
    print(f"{score:.4f} | '{a}'")
    print(f"         '{b}'")
    print()


# Same meaning
compare(
    "My kitchen sink is leaking.",
    "I need someone to repair a leaking sink."
)

# Different wording, same intent
compare(
    "Need a plumber.",
    "Looking for someone to fix my pipes."
)

# Wrong profession
compare(
    "My kitchen sink is leaking.",
    "I paint houses and apartments."
)

# Different animals
compare(
    "cat",
    "dog"
)

# Related concepts
compare(
    "cat",
    "owner"
)

# Very unrelated
compare(
    "cat",
    "airplane"
)

# Real HANDIPAL example
job = "My bathroom tap has been leaking for three days."

plumber = "Professional plumber. Repairs leaking taps, sinks, toilets and pipes."

electrician = "Certified electrician. Installs sockets, lighting and fuse boxes."

carpenter = "Custom furniture, wooden floors and doors."

job_vec = embed_text(job)

print("HANDIPAL ranking")
print("-----------------")
print("Plumber    :", cosine_similarity(job_vec, embed_text(plumber)))
print("Electrician:", cosine_similarity(job_vec, embed_text(electrician)))
print("Carpenter  :", cosine_similarity(job_vec, embed_text(carpenter)))