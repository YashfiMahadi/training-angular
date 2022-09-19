<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $foods = Food::orderBy('id', 'desc')->get();

        $data = [
            "foods" => $foods
        ];

        return Response::json($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // SECTION rule validasi
        $validator = Validator::make($request->all(), [
            'name'   => 'required',
            'jenis'   => 'required',
            'deskripsi'   => 'required',
        ]);
        // !SECTION rule validasi
        // SECTION validasi
        if ($validator->fails()) {
            $data = $validator->errors();
            $code = 422;
        } else {
            Food::create($request->all());
            $data = [
                'message' => 'record created successfully'
            ];
            $code = 200;
        }
        // !SECTION validasi
        return Response::json($data, $code);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Food::where('id', $id)->exists()) {
            $data = Food::find($id);
            $code = 200;
        } else {
            $data = [
                'message' => 'Food not found'
            ];
            $code = 404;
        }

        return Response::json($data, $code);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // SECTION rule validasi
        $validator = Validator::make($request->all(), [
            'name'   => 'required',
            'jenis'   => 'required',
            'deskripsi'   => 'required',
        ]);
        // !SECTION rule validasi
        // SECTION validasi
        if ($validator->fails()) {
            return Response::json($validator->errors(), 422);
        }elseif (Food::where('id', $id)->exists()) {

            Food::where('id',$id)->update([
                'name' => $request->name,
                'jenis' => $request->jenis,
                'deskripsi' => $request->deskripsi
            ]);

            return Response::json([
                'message' => 'record update successfully'
            ], 200);
        } else {
            return Response::json([
                'message' => 'Food not found'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Food::where('id', $id)->exists()) {
            Food::where('id',$id)->delete();

            return Response::json([
                'message' => 'record delete successfully'
            ], 200);
        } else {
            return Response::json([
                'message' => 'Food not found'
            ], 404);
        }
    }
}
