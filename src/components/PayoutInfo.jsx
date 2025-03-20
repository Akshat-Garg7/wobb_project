import React from "react";

const PayoutInfo = ({ payoutType, payoutAmount, additionalBenefit, deadline }) => {
    return (
      <div className="mb-4 bg-gray-50 rounded-lg p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Payout</p>
            <div className="mt-1">
              <p className="text-sm font-semibold text-gray-900">{payoutType}</p>
              {payoutAmount && (
                <p className="text-sm font-bold text-green-600">{payoutAmount}</p>
              )}
              {additionalBenefit && (
                <p className="text-xs text-gray-600 mt-1">+ {additionalBenefit}</p>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-500">Deadline</p>
            <p className="text-sm font-medium text-gray-900 mt-1">{deadline}</p>
          </div>
        </div>
      </div>
    );
  };
export default PayoutInfo;