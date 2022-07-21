from abc import ABC, abstractmethod
from dataclasses import dataclass
from enum import Enum
from typing import Set


@dataclass
class DataModel:
    pass


@dataclass
class Port:
    number: int
    data_model: DataModel

    def __hash__(self):
        return hash(self.number)


@dataclass
class Sensor:
    ports: Set[Port]
    name: str = None


class DataDecoder(ABC):
    def __init__(self, sensor: Sensor):
        self.sensor = sensor

    @abstractmethod
    def decode(self, data: bytes):
        ...


class DataEncoder(ABC):
    def __init__(self, sensor: Sensor):
        self.sensor = sensor

    @abstractmethod
    def encode(self, data: dict):
        ...
