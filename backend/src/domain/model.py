from dataclasses import dataclass
from enum import Enum


class DataDecoder:
    pass


class DataEncoder:
    pass


class HeaderAndBytesDataEncoder:
    pass


class DataType(Enum):
    header_and_bytes = "header_and_bytes"


@dataclass
class Port:
    number: int
    data_type: str


@dataclass
class Sensor:
    pass
