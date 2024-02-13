/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-eval */
/* eslint-disable no-bitwise */
import fs from "fs";
import Hardware from "../../hardware";
import { DeviceType } from "../../../renderer/types/devices";

const open = async (file: any) => file.device;

const connect = async (file: any) => {
  const dev = await open(file);
  return dev;
};

const isDeviceConnected = (device: DeviceType) => true;

const isDeviceSupported = async (device: DeviceType) => true;

const isVirtualType = (device: any): device is DeviceType => "file" in device;

export { connect, isDeviceConnected, isDeviceSupported, DeviceType, isVirtualType };
