import type {
	Layout,
	Properties,
} from "@kintone/rest-api-client/lib/src/client/types";
import { describe, expect, test } from "vitest";
import { generateFields } from "../../../src/functions/utility";
import { kintonePrettyFields } from "../../../src/index";

import formFields from "./flelds.json";
import formLayouts from "./layout.json";

const { fields: allFields } = generateFields(
	formFields as Properties,
	formLayouts as Layout,
);

describe("全フィールド", () => {
	const fields = allFields;

	test("フィールド数", () => {
		expect(fields.length).toBe(18);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("レコード番号");
		expect(fields[1].code).toBe("ルックアップ");
		expect(fields[2].code).toBe("ご担当者名");
		expect(fields[3].code).toBe("電話番号");
		expect(fields[4].code).toBe("対応担当者");
		expect(fields[5].code).toBe("受付日時");
		expect(fields[6].code).toBe("対応状況");
		expect(fields[7].code).toBe("問い合わせ種別");
		expect(fields[8].code).toBe("期限");
		expect(fields[9].code).toBe("詳細");
		expect(fields[10].code).toBe("対応日時");
		expect(fields[11].code).toBe("対応内容");
		expect(fields[12].code).toBe("添付ファイル");
		expect(fields[13].code).toBe("対応詳細");
		expect(fields[14].code).toBe("作成者");
		expect(fields[15].code).toBe("作成日時");
		expect(fields[16].code).toBe("更新者");
		expect(fields[17].code).toBe("更新日時");
	});
});

describe("文字列1行", () => {
	const fields = allFields.filter(kintonePrettyFields.isSingleLineText);

	test("フィールド数", () => {
		expect(fields.length).toBe(2);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("ルックアップ");
		expect(fields[1].code).toBe("ご担当者名");
	});
});

describe("ルックアップ", () => {
	const fields = allFields.filter(kintonePrettyFields.isLookup);

	test("フィールド数", () => {
		expect(fields.length).toBe(1);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("ルックアップ");
	});
});

describe("ルックアップコピー", () => {
	const fields = allFields.filter(kintonePrettyFields.isLookupCopy);
	console.log({ fields });

	test("フィールド数", () => {
		expect(fields.length).toBe(2);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("ご担当者名");
		expect(fields[1].code).toBe("電話番号");
	});

	describe("文字列1行", () => {
		const singleLineTextFields = fields.filter(
			kintonePrettyFields.isSingleLineText,
		);
		test("フィールド数", () => {
			expect(singleLineTextFields.length).toBe(1);
		});

		test("フィールドコード", () => {
			expect(singleLineTextFields[0].code).toBe("ご担当者名");
		});
	});

	describe("リンク", () => {
		const linkFields = fields.filter(kintonePrettyFields.isLink);
		test("フィールド数", () => {
			expect(linkFields.length).toBe(1);
		});

		test("フィールドコード", () => {
			expect(linkFields[0].code).toBe("電話番号");
		});
	});
});

describe("日付", () => {
	const fields = allFields.filter(kintonePrettyFields.isDate);

	test("フィールド数", () => {
		expect(fields.length).toBe(1);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("期限");
	});
});

describe("テーブル", () => {
	const fields = allFields.filter(kintonePrettyFields.isInSubtable);

	test("フィールド数", () => {
		expect(fields.length).toBe(3);
	});

	test("フィールドコード", () => {
		expect(fields[0].code).toBe("対応日時");
		expect(fields[1].code).toBe("対応内容");
		expect(fields[2].code).toBe("添付ファイル");
	});
});
