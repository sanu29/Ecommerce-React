import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllAddress  = function (schema, request) {
        const userId = requiresAuth.call(this, request);
        if (!userId) {
          new Response(
            404,
            {},
            {
              errors: ["The email you entered is not Registered. Not Found error"],
            }
          );
        }
        const userAddress = schema.users.findBy({ _id: userId }).address;
        return new Response(200, {}, { address: userAddress });
      };


      export const addAddress = function (schema, request) {
        const userId = requiresAuth.call(this, request);
        try {
          if (!userId) {
            new Response(
              404,
              {},
              {
                errors: ["The email you entered is not Registered. Not Found error"],
              }
            );
          }
          const userAddress = schema.users.findBy({ _id: userId }).address;
          const { address } = JSON.parse(request.requestBody);
          userAddress.push({
            _id: uuid(), 
         ...address
                  });
          this.db.users.update({ _id: userId }, { address: userAddress });
          return new Response(201, {}, { address: userAddress });
        } catch (error) {
          return new Response(
            500,
            {},
            {
              error,
            }
          );
        }
      };
         

      export const removeAddress = function (schema, request) {
        const userId = requiresAuth.call(this, request);
        try {
          if (!userId) {
            new Response(
              404,
              {},
              {
                errors: ["The email you entered is not Registered. Not Found error"],
              }
            );
          }
          let userAddress = schema.users.findBy({ _id: userId }).address;
          const addressId = request.params.addressId;
          userAddress = userAddress.filter((item) => item._id !== addressId);
          this.db.users.update({ _id: userId }, { address: userAddress });
          return new Response(200, {}, { address: userAddress });
        } catch (error) {
          return new Response(
            500,
            {},
            {
              error,
            }
          );
        }
      };