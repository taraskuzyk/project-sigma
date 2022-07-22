from domain import header_and_bytes as hnb


class TestDecode:
    def test_decode_parameter_payload(self):
        parameter = hnb.Parameter(
            name="param1", bit_high=15, bit_low=12, type=hnb.DataType.unsigned_int
        )

        assert parameter.decode([0b0001_1111, 0b1111_1111]) == 1

    def test_simple_decode(self):
        dm = hnb.HeaderAndBytes(
            header_length=1,
            header_vs_decoding_parameters={
                (1,): hnb.Group(
                    no_of_bytes=2,
                    name="lol",
                    parameters=[
                        hnb.Parameter(
                            name="xd1",
                            bit_high=15,
                            bit_low=12,
                            type=hnb.DataType.unsigned_int,
                        ),
                        hnb.Parameter(
                            name="xd2",
                            bit_high=11,
                            bit_low=0,
                            type=hnb.DataType.signed_int,
                        ),
                    ],
                )
            },
        )

        assert dm.decode([1, 0b0001_0001, 0b0001_0001]) == {
            "lol": {"xd1": 1, "xd2": 256 + 16 + 1}
        }
