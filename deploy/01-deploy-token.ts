import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import verify from "../utils/verify";
import {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
} from "../helper-hardhat-config";
