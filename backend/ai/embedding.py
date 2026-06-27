"""
Embedding utilities for HANDIPAL.

This module is responsible for converting text into dense vector embeddings.
The model is loaded once and reused throughout the application.
"""

from sentence_transformers import SentenceTransformer

_MODEL_NAME = "all-MiniLM-L6-v2"

_model = SentenceTransformer(_MODEL_NAME)


def embed_text(text: str) -> list[float]:
    """
    Convert a piece of text into a semantic embedding.

    Args:
        text: Input text.

    Returns:
        A list of floats representing the embedding.
    """

    if not text.strip():
        raise ValueError("Text cannot be empty.")

    return _model.encode(
        text,
        convert_to_numpy=True,
        normalize_embeddings=True,
    ).tolist()


def model_name() -> str:
    """Return the embedding model currently in use."""
    return _MODEL_NAME