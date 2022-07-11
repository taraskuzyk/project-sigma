import math
from typing import List


def get_unsigned_int(input_bytes: List[int]) -> int:
    output = 0
    for byte in input_bytes:
        output = (output << 8) | byte
    return output


def get_signed_int(input_bytes: List[int]) -> int:
    unsigned = get_unsigned_int(input_bytes)
    no_of_bytes = len(input_bytes)
    if _too_big_to_treat_as_unsigned(unsigned, no_of_bytes):
        return _get_negative_signed_from_unsigned(unsigned, no_of_bytes)
    return unsigned


def _too_big_to_treat_as_unsigned(unsigned_int: int, no_of_bytes: int) -> bool:
    return unsigned_int >= _max_positive_signed_int(no_of_bytes)


def _max_positive_signed_int(no_of_bytes: int) -> int:
    return _power_of_two(8 * no_of_bytes - 1)


def _get_negative_signed_from_unsigned(unsigned: int, no_of_bytes: int) -> int:
    max_possible_number_in_no_of_bytes = _power_of_two(8 * no_of_bytes)
    return unsigned - max_possible_number_in_no_of_bytes


def _integer_power(base: int, power: int) -> int:
    return int(math.pow(base, power))


def _power_of_two(power: int) -> int:
    return _integer_power(2, power)
