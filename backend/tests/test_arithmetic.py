from domain.arithmetic import get_signed_int, get_unsigned_int


def test_unsigned_int_with_two_bytes():
    assert get_unsigned_int([0b0000_0001, 0b0000_0000]) == 0b0000_0001_0000_0000


def test_signed_int_with_two_bytes():
    assert get_signed_int([0b0000_0001, 0b0000_0000]) == 0b0000_0001_0000_0000


def test_signed_int_with_negative_signed_bit():
    assert get_signed_int([0b1000_0000]) == -128


