import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { TeamMemberService } from "./teamMember.service";

const CreateTeamMember = catchAsync(async (req: Request, res: Response) => {
  const { teamId } = req.params;
  const result = await TeamMemberService.CreateTeamMemberIntoDB(teamId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Team member created successfully..!",
    data: result,
  });
});

const GetTeamMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.GetTeamMembersFromDB(req.params.teamId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team members retrieved successfully..!",
    data: result,
  });
});

const GetSingleTeamMember = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.GetSingleTeamMember(req.params.memberId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team member retrieved successfully..!",
    data: result,
  });
});

const UpdateTeamMember = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.UpdateTeamMember(
    req.params.memberId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team member updated successfully..!",
    data: result,
  });
});

const DeleteTeamMember = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.DeleteTeamMember(req.params.memberId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Team member deleted successfully..!",
    data: result,
  });
});

export const TeamMemberController = {
  CreateTeamMember,
  GetTeamMembers,
  GetSingleTeamMember,
  UpdateTeamMember,
  DeleteTeamMember,
};
