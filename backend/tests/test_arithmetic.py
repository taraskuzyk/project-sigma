from domain.arithmetic import (
    get_signed_int,
    get_unsigned_int,
    extract_bytes,
    _get_total_bytes,
    _chunk_to_string,
)


def test_unsigned_int_with_two_bytes():
    assert get_unsigned_int([0b0000_0001, 0b0000_0000]) == 0b0000_0001_0000_0000


def test_signed_int_with_two_bytes():
    assert get_signed_int([0b0000_0001, 0b0000_0000]) == 0b0000_0001_0000_0000


def test_signed_int_with_negative_signed_bit():
    assert get_signed_int([0b1000_0000]) == -128


def test_extract_bytes():
    assert extract_bytes([0b0001_0000], bit_high=7, bit_low=4) == [0b0001]
    assert extract_bytes([0b0001_0000, 0b1001_0000], bit_high=15, bit_low=4) == [
        0b0001,
        0b0000_1001,
    ]


def test_get_total_bytes():
    assert _get_total_bytes(8) == 1
    assert _get_total_bytes(6) == 1
    assert _get_total_bytes(15) == 2


def test_chunk_to_string():
    assert _chunk_to_string([1, 1]) == "0000000100000001"
