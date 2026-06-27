from math import acos, pi, sqrt


def _validate_vectors(a, b):
    if len(a) != len(b):
        raise ValueError("Vectors must have the same length")
    if len(a) == 0:
        raise ValueError("Vectors must not be empty")
    return [float(x) for x in a], [float(x) for x in b]


def _dot_product(a, b):
    return sum(x * y for x, y in zip(a, b))


def _magnitude(a):
    return sqrt(sum(x * x for x in a))


def cosine_similarity(a, b):
    """Cosine similarity mapped to [0, 1]."""
    a, b = _validate_vectors(a, b)
    mag_a = _magnitude(a)
    mag_b = _magnitude(b)
    if mag_a == 0 or mag_b == 0:
        return 0.0
    cos_value = _dot_product(a, b) / (mag_a * mag_b)
    return max(0.0, min(1.0, (cos_value + 1.0) / 2.0))


def angular_similarity(a, b):
    """Angular similarity in [0, 1], derived from cosine distance."""
    a, b = _validate_vectors(a, b)
    mag_a = _magnitude(a)
    mag_b = _magnitude(b)
    if mag_a == 0 or mag_b == 0:
        return 0.0
    cos_value = _dot_product(a, b) / (mag_a * mag_b)
    cos_value = max(-1.0, min(1.0, cos_value))
    angle = acos(cos_value)
    return 1.0 - angle / pi


def euclidean_similarity(a, b):
    """Euclidean-based similarity, 1 / (1 + distance)."""
    a, b = _validate_vectors(a, b)
    distance = sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))
    return 1.0 / (1.0 + distance)


def manhattan_similarity(a, b):
    """Manhattan-based similarity, 1 / (1 + L1 distance)."""
    a, b = _validate_vectors(a, b)
    distance = sum(abs(x - y) for x, y in zip(a, b))
    return 1.0 / (1.0 + distance)


def dice_similarity(a, b):
    """Dice similarity normalized to [0, 1] for arbitrary numeric vectors."""
    a, b = _validate_vectors(a, b)
    a_abs = [abs(x) for x in a]
    b_abs = [abs(x) for x in b]
    numerator = 2.0 * sum(min(x, y) for x, y in zip(a_abs, b_abs))
    denominator = sum(x + y for x, y in zip(a_abs, b_abs))
    if denominator == 0:
        return 0.0
    return numerator / denominator


def jaccard_similarity(a, b):
    """Jaccard similarity normalized to [0, 1] for absolute vector values."""
    a, b = _validate_vectors(a, b)
    a_abs = [abs(x) for x in a]
    b_abs = [abs(x) for x in b]
    numerator = sum(min(x, y) for x, y in zip(a_abs, b_abs))
    denominator = sum(max(x, y) for x, y in zip(a_abs, b_abs))
    if denominator == 0:
        return 0.0
    return numerator / denominator


def pearson_similarity(a, b):
    """Pearson correlation mapped to [0, 1]."""
    a, b = _validate_vectors(a, b)
    mean_a = sum(a) / len(a)
    mean_b = sum(b) / len(b)
    centered_a = [x - mean_a for x in a]
    centered_b = [y - mean_b for y in b]
    covariance = sum(x * y for x, y in zip(centered_a, centered_b))
    variance_a = sum(x * x for x in centered_a)
    variance_b = sum(y * y for y in centered_b)
    if variance_a == 0 or variance_b == 0:
        if a == b:
            return 1.0
        return 0.0
    correlation = covariance / sqrt(variance_a * variance_b)
    return max(0.0, min(1.0, (correlation + 1.0) / 2.0))


def dot_product_similarity(a, b):
    """Dot product based similarity normalized to [0, 1]."""
    a, b = _validate_vectors(a, b)
    dot = _dot_product(a, b)
    if dot <= 0:
        return 0.0
    return dot / (1.0 + dot)


def normalized_overlap_similarity(a, b):
    """Overlap similarity using absolute values, normalized to [0, 1]."""
    a, b = _validate_vectors(a, b)
    a_abs = [abs(x) for x in a]
    b_abs = [abs(x) for x in b]
    intersection = sum(min(x, y) for x, y in zip(a_abs, b_abs))
    total = sum(a_abs) + sum(b_abs)
    if total == 0:
        return 0.0
    return 2.0 * intersection / total
