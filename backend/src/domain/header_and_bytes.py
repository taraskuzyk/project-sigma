from copy import deepcopy
from dataclasses import dataclass
from enum import Enum
from typing import List, Dict, Tuple

from domain import arithmetic
from domain.model import DataDecoder, DataModel


class DataType(Enum):
    unsigned_int = "unsigned_int"
    signed_int = "signed_int"
    hex_string = "hex_string"


DATA_TYPE_VS_GETTER = {
    DataType.unsigned_int: arithmetic.get_unsigned_int,
    DataType.signed_int: arithmetic.get_signed_int,
}


@dataclass
class Parameter:
    name: str
    type: DataType

    bit_low: int
    bit_high: int

    multiplier: int = None
    round: int = None

    display_name: str = None

    def decode(self, input_bytes: List[int]):
        necessary_bytes = arithmetic.extract_bytes(
            chunk=input_bytes, bit_high=self.bit_high, bit_low=self.bit_low
        )
        value = DATA_TYPE_VS_GETTER[self.type](necessary_bytes)
        if self.multiplier is not None:
            value *= self.multiplier
        if self.round is not None:
            value = round(value, ndigits=self.round)
        return value


@dataclass
class Group:
    no_of_bytes: int
    name: str
    parameters: List[Parameter]

    def decode(self, input_bytes: List[int]):
        decoded = {self.name: {}}
        for parameter in self.parameters:
            decoded[self.name][parameter.name] = parameter.decode(input_bytes)
        return decoded


@dataclass
class Payload:
    payload: List[int]


@dataclass
class HeaderAndBytes(DataModel):
    header_length: int
    header_vs_decoding_parameters: Dict[Tuple[int], Group]

    def decode(self, input_bytes: List[int]) -> dict:
        decoded = {}
        input_bytes = deepcopy(input_bytes)
        while input_bytes:
            header = tuple(input_bytes[: self.header_length])
            input_bytes = input_bytes[self.header_length :]
            if header not in self.header_vs_decoding_parameters:
                raise ValueError(f"Header {header} not found in data model")

            group = self.header_vs_decoding_parameters[header]
            consumed = input_bytes[: group.no_of_bytes]
            input_bytes = input_bytes[group.no_of_bytes :]

            decoded = {**decoded, **group.decode(consumed)}

        return decoded

    def encode(self):
        pass


def consume_bytes(input_bytes: List[int], number_of_bytes: int) -> List[int]:
    consumed = input_bytes[:number_of_bytes]
    input_bytes = input_bytes[number_of_bytes:]
    return consumed


@dataclass
class Payload:
    port: int
    payload_bytes: List[int]


@dataclass
class Sensor:
    name: str
    port_vs_datamodel: [int, str]


class HeaderAndBytesDataEncoder(DataDecoder):
    def decode(self, data: bytes):
        pass
