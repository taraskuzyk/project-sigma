from dataclasses import dataclass
from enum import Enum
from typing import List, Dict

from domain.model import DataDecoder


class DataType(Enum):
    unsigned_int = "unsigned_int"
    signed_int = "signed_int"
    hex_string = "hex_string"


@dataclass
class Parameter:
    name: str

    bit_low: int
    bit_high: int
    multiplier: int = 1
    round: int = 0

    display_name: str = None


@dataclass
class Group:
    no_of_bytes: int
    name: str
    parameters: List[Parameter]


@dataclass
class HeaderAndBytesDataModel:
    header_length: int
    header_vs_decoding_parameters: Dict[List[int], Group]



@dataclass
class Payload:
    port: int
    payload_bytes: List[int]


class HeaderAndBytesDataEncoder(DataDecoder):
    def decode(self, data: bytes):
        pass