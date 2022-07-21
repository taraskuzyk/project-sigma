from domain import header_and_bytes as hnb


class TestDecode:
    def test_simple_decode(self):
        dm = hnb.HeaderAndBytesDataModel(
            header_length=1,
            header_vs_decoding_parameters={
                [1]: hnb.Group(
                    no_of_bytes=2,
                    name="lol",
                    parameters=[
                        hnb.Parameter(name="xd1", bit_high=15, bit_low=12),
                        hnb.Parameter(name="xd2", bit_high=11, bit_low=0),
                    ],
                )
            },
        )
