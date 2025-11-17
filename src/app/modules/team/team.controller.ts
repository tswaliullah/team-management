import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { TeamService } from "./team.service";

const CreateTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.CreateTeamIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Team created successfully..!",
    data: result,
  });
});

const GetAllTeams = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.GetAllTeamsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teams retrieved successfully..!",
    data: result,
  });
});

const GetSingleTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.GetSingleTeamFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team retrieved successfully..!",
    data: result,
  });
});

const UpdateTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.UpdateTeamIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team updated successfully..!",
    data: result,
  });
});

const DeleteTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.DeleteTeamFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team deleted successfully..!",
    data: result,
  });
});

export const TeamController = {
  CreateTeam,
  GetAllTeams,
  GetSingleTeam,
  UpdateTeam,
  DeleteTeam,
};
